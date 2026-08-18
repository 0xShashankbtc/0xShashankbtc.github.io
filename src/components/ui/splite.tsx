'use client'

import React, { Suspense, lazy, useState, useEffect, useRef } from 'react'

const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const [shouldLoad, setShouldLoad] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Lazy mount 3D Spline on interaction or viewport intersection
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      });
    }, { rootMargin: '100px' });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={`w-full h-full relative ${className || ''}`}>
      {shouldLoad ? (
        <Suspense 
          fallback={
            <div className="w-full h-full flex items-center justify-center bg-slate-950/40 backdrop-blur-xs">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                <span className="w-4 h-4 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></span>
                <span>Loading 3D Robot...</span>
              </div>
            </div>
          }
        >
          <Spline
            scene={scene}
            className="w-full h-full"
          />
        </Suspense>
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-slate-950/20">
          <span className="w-4 h-4 border-2 border-cyan-400/50 border-t-transparent rounded-full animate-spin"></span>
        </div>
      )}
    </div>
  )
}

export default SplineScene;
