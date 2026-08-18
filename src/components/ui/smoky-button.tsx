import React, { forwardRef, useEffect, useRef, type ButtonHTMLAttributes } from "react";

export interface SmokeColors {
  primary: string;
  secondary: string;
  shadow: string;
}

export interface SmokyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  colors?: SmokeColors;
  status?: string;
  speed?: number;
}

type RgbColor = readonly [number, number, number];

interface SmokeSettings {
  colors: readonly [RgbColor, RgbColor, RgbColor];
  speed: number;
}

interface SmokeRenderer {
  update: (settings: SmokeSettings) => void;
  pause: () => void;
  resume: () => void;
  destroy: () => void;
}

const VERTEX_SHADER = `
  attribute vec2 aPosition;
  void main() {
    gl_Position = vec4(aPosition, 0.0, 1.0);
  }
`;

const FRAGMENT_SHADER = `
  precision mediump float;

  uniform vec2 uResolution;
  uniform float uTime;
  uniform float uSpeed;
  uniform vec3 uPrimary;
  uniform vec3 uSecondary;
  uniform vec3 uShadow;

  float random(vec2 position) {
    return fract(sin(dot(position, vec2(12.9898, 78.233))) * 43758.5453);
  }

  float noise(vec2 position) {
    vec2 cell = floor(position);
    vec2 offset = fract(position);
    float a = random(cell);
    float b = random(cell + vec2(1.0, 0.0));
    float c = random(cell + vec2(0.0, 1.0));
    float d = random(cell + vec2(1.0, 1.0));
    vec2 blend = offset * offset * (3.0 - 2.0 * offset);
    return mix(a, b, blend.x)
      + (c - a) * blend.y * (1.0 - blend.x)
      + (d - b) * blend.x * blend.y;
  }

  // Optimized fBm with 4 iterations for lightweight GPU execution
  float fbm(vec2 position) {
    float value = 0.0;
    float amplitude = 0.5;
    mat2 rotation = mat2(0.8776, 0.4794, -0.4794, 0.8776);

    for (int i = 0; i < 4; i++) {
      value += amplitude * noise(position);
      position = rotation * position * 2.04 + vec2(13.7, 9.2);
      amplitude *= 0.5;
    }

    return value;
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / uResolution.xy;
    vec2 position = (gl_FragCoord.xy - 0.5 * uResolution.xy) / uResolution.y;
    float time = uTime * uSpeed * 0.58;

    vec2 silkPosition = position;
    silkPosition.y += 0.20 * sin(position.x * 1.55 - time * 1.8);
    silkPosition.x += 0.06 * sin(position.y * 4.2 - time * 1.1);

    vec2 warp = vec2(
      fbm(silkPosition * 1.15 + vec2(time * 0.28, -time * 0.17)),
      fbm(silkPosition * 1.05 + vec2(4.8, 1.3) - vec2(time * 0.18, time * 0.22))
    );
    vec2 current = silkPosition + (warp - 0.5) * 0.82;
    float body = fbm(current * 1.35 + vec2(-time * 0.24, time * 0.14));
    float primaryPlume = fbm(current * 1.20 + vec2(-time * 0.38, time * 0.18));
    float secondaryPlume = fbm(current * 1.10 + vec2(time * 0.26, -time * 0.32));
    float shadowPlume = fbm(current * 1.45 + vec2(-time * 0.18, time * 0.42));

    float sharedFlow = current.y * 6.8 + current.x * 1.35 + (warp.x - warp.y) * 5.2;
    float primaryRibbon = smoothstep(0.08, 0.92, 0.5 + 0.5 * sin(sharedFlow - time * 2.75));
    float secondaryRibbon = smoothstep(0.08, 0.92, 0.5 + 0.5 * sin(current.y * 5.4 - current.x * 2.1 + time * 2.35));
    float shadowRibbon = smoothstep(0.12, 0.88, 0.5 + 0.5 * sin(sharedFlow * 0.78 - time * 3.25));

    float primaryWeight = smoothstep(0.27, 0.76, primaryPlume + 0.24 * body) * (0.20 + 1.08 * primaryRibbon);
    float secondaryWeight = smoothstep(0.26, 0.74, secondaryPlume + 0.22 * body) * (0.22 + 1.04 * secondaryRibbon);
    float shadowWeight = 0.16 + smoothstep(0.32, 0.80, shadowPlume + 0.14 * body) * (0.22 + 0.86 * shadowRibbon);
    float totalWeight = max(primaryWeight + secondaryWeight + shadowWeight, 0.001);
    
    vec3 color = (uPrimary * primaryWeight + uSecondary * secondaryWeight + uShadow * shadowWeight) / totalWeight;
    float depth = smoothstep(0.15, 0.88, body * 0.78);
    color *= 0.65 + depth * 0.62;

    float alpha = smoothstep(0.24, 0.72, uv.x + 0.12 * (body - 0.5));
    gl_FragColor = vec4(clamp(color, 0.0, 1.0), alpha);
  }
`;

const createShader = (gl: WebGLRenderingContext, type: number, source: string) => {
  const shader = gl.createShader(type);
  if (!shader) throw new Error("Unable to create WebGL shader.");
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    throw new Error("Shader compile error");
  }
  return shader;
};

const createProgram = (gl: WebGLRenderingContext) => {
  const vertexShader = createShader(gl, gl.VERTEX_SHADER, VERTEX_SHADER);
  const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_SHADER);
  const program = gl.createProgram();
  if (!program) throw new Error("Unable to create WebGL program.");
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  gl.deleteShader(vertexShader);
  gl.deleteShader(fragmentShader);
  return program;
};

const hexToRgb = (hex: string): RgbColor => {
  const value = hex.replace("#", "").trim();
  const normalized = value.length === 3
    ? value.split("").map((c) => c + c).join("")
    : value;
  const parsed = Number.parseInt(normalized, 16);
  if (normalized.length !== 6 || Number.isNaN(parsed)) return [0, 0, 0];
  return [
    ((parsed >> 16) & 255) / 255,
    ((parsed >> 8) & 255) / 255,
    (parsed & 255) / 255,
  ];
};

const createSmokeRenderer = (
  canvas: HTMLCanvasElement,
  initialSettings: SmokeSettings,
): SmokeRenderer => {
  const gl = canvas.getContext("webgl", {
    alpha: true,
    antialias: false,
    premultipliedAlpha: true,
    powerPreference: "low-power",
  });
  if (!gl) throw new Error("WebGL not available");

  const program = createProgram(gl);
  const buffer = gl.createBuffer();
  if (!buffer) throw new Error("Buffer error");

  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);

  const position = gl.getAttribLocation(program, "aPosition");
  const resolution = gl.getUniformLocation(program, "uResolution");
  const time = gl.getUniformLocation(program, "uTime");
  const speed = gl.getUniformLocation(program, "uSpeed");
  const primary = gl.getUniformLocation(program, "uPrimary");
  const secondary = gl.getUniformLocation(program, "uSecondary");
  const shadow = gl.getUniformLocation(program, "uShadow");

  let settings = initialSettings;
  let frame = 0;
  let isRunning = true;

  const resize = () => {
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
    canvas.width = Math.max(1, Math.round(canvas.clientWidth * pixelRatio));
    canvas.height = Math.max(1, Math.round(canvas.clientHeight * pixelRatio));
  };

  const startedAt = performance.now();
  const render = (now: number) => {
    if (!isRunning) return;
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.useProgram(program);
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
    gl.uniform2f(resolution, canvas.width, canvas.height);
    gl.uniform1f(time, (now - startedAt) / 1000);
    gl.uniform1f(speed, settings.speed);
    gl.uniform3f(primary, ...settings.colors[0]);
    gl.uniform3f(secondary, ...settings.colors[1]);
    gl.uniform3f(shadow, ...settings.colors[2]);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
    frame = requestAnimationFrame(render);
  };

  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(canvas.parentElement ?? canvas);
  resize();
  frame = requestAnimationFrame(render);

  return {
    update(nextSettings) {
      settings = nextSettings;
    },
    pause() {
      if (isRunning) {
        isRunning = false;
        cancelAnimationFrame(frame);
      }
    },
    resume() {
      if (!isRunning) {
        isRunning = true;
        frame = requestAnimationFrame(render);
      }
    },
    destroy() {
      isRunning = false;
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
    },
  };
};

export const DEFAULT_SMOKE_COLORS: SmokeColors = {
  primary: "#0ea5e9",
  secondary: "#6366f1",
  shadow: "#0284c7",
};

export const SmokyButton = forwardRef<HTMLButtonElement, SmokyButtonProps>(
  (
    {
      children = "Smoky Button",
      className = "",
      colors = DEFAULT_SMOKE_COLORS,
      status = "",
      speed = 1,
      type = "button",
      ...props
    },
    ref,
  ) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const rendererRef = useRef<SmokeRenderer | null>(null);

    useEffect(() => {
      if (!canvasRef.current) return;

      try {
        rendererRef.current = createSmokeRenderer(canvasRef.current, {
          colors: [
            hexToRgb(colors.primary || DEFAULT_SMOKE_COLORS.primary),
            hexToRgb(colors.secondary || DEFAULT_SMOKE_COLORS.secondary),
            hexToRgb(colors.shadow || DEFAULT_SMOKE_COLORS.shadow),
          ],
          speed: speed || 1,
        });

        // Pause WebGL rendering when off-screen to conserve CPU & GPU
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              rendererRef.current?.resume();
            } else {
              rendererRef.current?.pause();
            }
          });
        }, { threshold: 0.1 });

        if (canvasRef.current) {
          observer.observe(canvasRef.current);
        }

        return () => {
          observer.disconnect();
          rendererRef.current?.destroy();
          rendererRef.current = null;
        };
      } catch (error) {
        console.error("Smoky button renderer init error", error);
      }
    }, []);

    useEffect(() => {
      rendererRef.current?.update({
        colors: [
          hexToRgb(colors.primary || DEFAULT_SMOKE_COLORS.primary),
          hexToRgb(colors.secondary || DEFAULT_SMOKE_COLORS.secondary),
          hexToRgb(colors.shadow || DEFAULT_SMOKE_COLORS.shadow),
        ],
        speed: speed || 1,
      });
    }, [colors.primary, colors.secondary, colors.shadow, speed]);

    return (
      <button
        {...props}
        ref={ref}
        type={type}
        className={`smoky-button ${className}`.trim()}
      >
        <canvas ref={canvasRef} className="smoky-button__canvas" aria-hidden="true" />
        <span className="smoky-button__copy">
          <span className="smoky-button__label">{children}</span>
          {status ? <span className="smoky-button__status">{status}</span> : null}
        </span>
      </button>
    );
  },
);

SmokyButton.displayName = "SmokyButton";

export default SmokyButton;
