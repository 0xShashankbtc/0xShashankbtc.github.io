export const SITE_METADATA = {
  name: "Shashank Jangid",
  title: "AI Systems Scholar · Robotics & Kinematics · CUDA & Distributed Systems",
  tagline: "Engineering autonomous robotics, high-performance CUDA GPU pipelines, multi-agent AI architectures, and distributed embedded systems.",
  bio: "M.Tech AI Scholar at IIT Jodhpur & Electronics Engineer. Dedicated to engineering real-time autonomous robotics (ROS2 & Kinematics), high-throughput GPU computing (C++/CUDA Sobel & Canny), distributed database sharding, production LLM fine-tuning (QLoRA & LangGraph), and embedded IoT signal processing (ESP32/FFT).",
  status: "Available for Opportunities",
  email: "Shashankjangidofficial@gmail.com",
  phone: "+91 89583 47428",
  linkedin: "https://linkedin.com/in/Shashank_Jangid",
  github: "https://github.com/0xShashankbtc",
  githubAlt: "https://github.com/ShashankJangid",
  location: "IIT Jodhpur, Rajasthan, India",
  yearsExperience: "4+",
  projectsDelivered: "20+",
  certificationsCount: "5+",
  degree: "M.Tech in Artificial Intelligence (IIT Jodhpur) · B.Tech in Electronics Engineering",
  graduationYear: "2026",
  splineModelUrl: "https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode",
  groqKeyDefault: import.meta.env.VITE_GROQ_API_KEY || "",
};

export const PROJECTS = [
  {
    id: "cuda-edge-detection",
    title: "CUDA Real-Time Edge Detection Pipeline",
    subtitle: "High-performance GPU-accelerated computer vision pipeline in C++/CUDA featuring 2D shared-memory Sobel filtering and 4-stage Canny edge detection.",
    category: "GPU & Systems",
    industry: "GPU Acceleration · Computer Vision",
    scope: "CUDA C++ & GPU Kernels",
    duration: "2026",
    image: "/ai-network.jpg",
    featured: true,
    challenge: "Processing high-resolution video streams in real-time requires minimizing memory latency and thread divergence on GPU architectures.",
    goal: "Build an ultra-fast C++/CUDA edge detection engine with sub-millisecond execution.",
    solution: "Implemented 2D shared-memory tiling for Sobel gradient computation and an optimized 4-stage Canny algorithm with non-maximum suppression.",
    highlights: [
      "2D Shared-Memory Tiling for low-latency kernel access",
      "4-Stage Canny edge detection pipeline on CUDA threads",
      "Non-Maximum Suppression (NMS) and hysteresis thresholding",
      "Benchmarked with OpenCV GPU and real-time webcam streams"
    ]
  },
  {
    id: "distributed-db-sharding",
    title: "Distributed Database Sharding Engine",
    subtitle: "Horizontal database partitioning system with consistent hash rings, virtual nodes, dynamic query router, and replication factor N across PostgreSQL nodes.",
    category: "GPU & Systems",
    industry: "Distributed Systems · Databases",
    scope: "Distributed Architecture",
    duration: "2026",
    image: "/iot-system.jpg",
    featured: true,
    challenge: "Maintaining balanced data distribution and fault tolerance when dynamically adding or removing database nodes.",
    goal: "Engineer a high-throughput sharding layer with minimal resharding overhead.",
    solution: "Designed consistent hashing with MD5 virtual nodes, automated ShardManager failover, and connection pooling for PostgreSQL.",
    highlights: [
      "Consistent hash ring with configurable virtual node multiplier",
      "Replication factor N with primary-replica automatic sync",
      "Intelligent query router with parallel scatter-gather queries",
      "Automated node health checks and dynamic rebalancing"
    ]
  },
  {
    id: "unitree-z1-sdk",
    title: "Unitree Z1 Robotic Arm SDK & Controller",
    subtitle: "Low-level precision SDK and ROS2 task-space controller for the Unitree Z1 arm — CAN bus communication, kinematic planning, and torque feedback.",
    category: "Robotics",
    industry: "Industrial Robotics · ROS2",
    scope: "C++ · ROS2 · CAN Bus",
    duration: "2025",
    image: "/robotic-arm.jpg",
    featured: true,
    challenge: "Interfacing multi-joint robotic arm actuators with low-latency CAN communication and smooth Cartesian trajectory interpolation.",
    goal: "Build a modular C++/Python control SDK and ROS2 integration for task-space arm manipulation.",
    solution: "Engineered CAN bus protocol driver, joint-space spline interpolation, and analytical inverse kinematics.",
    highlights: [
      "Direct CAN bus motor driver with real-time torque feedback",
      "Analytical & numerical forward/inverse kinematics solvers",
      "ROS2 MoveIt2 integration and Gazebo simulation",
      "Trajectory velocity/acceleration smoothing filters"
    ]
  },
  {
    id: "llm-finetuning-toolkit",
    title: "QLoRA LLM Fine-Tuning & Evaluation Toolkit",
    subtitle: "Production toolkit for parameter-efficient fine-tuning (PEFT) of open-source LLMs using QLoRA 4-bit quantization, TRL SFTTrainer, and W&B tracking.",
    category: "AI & ML",
    industry: "GenAI · LLM Engineering",
    scope: "PyTorch & HuggingFace",
    duration: "2025",
    image: "/ai-network.jpg",
    featured: true,
    challenge: "Fine-tuning large language models on single-GPU hardware without sacrificing downstream reasoning precision.",
    goal: "Build an automated, YAML-configured fine-tuning workflow for instruction tuning and domain adaptation.",
    solution: "Configured BitsAndBytes 4-bit NF4 quantization, LoRA rank optimization, and HuggingFace TRL trainer.",
    highlights: [
      "BitsAndBytes 4-bit NormalFloat (NF4) quantization",
      "PEFT LoRA adapter injection for attention & MLP layers",
      "Automated evaluation with BLEU, ROUGE, and perplexity metrics",
      "Weights & Biases (W&B) experiment logging and model artifact checkpointing"
    ]
  },
  {
    id: "ai-agent-framework",
    title: "Multi-Agent Orchestration & RAG Framework",
    subtitle: "Autonomous multi-agent framework built with LangChain, LangGraph, ChromaDB vector search, persistent conversation memory, and tool routing.",
    category: "AI & ML",
    industry: "Agentic AI · Multi-Agent Systems",
    scope: "LangGraph · Vector DB",
    duration: "2025",
    image: "/ai-network.jpg",
    featured: true,
    challenge: "Orchestrating complex multi-turn workflows across specialized agents while preventing state divergence and hallucinations.",
    goal: "Create a resilient agent architecture with dynamic tool dispatch and retrieval grounding.",
    solution: "Designed LangGraph state graphs with ChromaDB semantic search, custom tool runners, and streaming LLM synthesis.",
    highlights: [
      "Stateful LangGraph agent graph with conditional routing",
      "ChromaDB semantic retrieval with HuggingFace embeddings",
      "Automated function calling and web research tool integration",
      "Streaming token output with real-time UI synchronization"
    ]
  },
  {
    id: "computer-vision-pipeline",
    title: "Real-Time YOLOv8 & ByteTrack Vision Pipeline",
    subtitle: "High-throughput object detection and multi-camera object tracking engine using YOLOv8, OpenCV, and ByteTrack algorithm.",
    category: "AI & ML",
    industry: "Computer Vision · Edge AI",
    scope: "YOLOv8 · OpenCV · Tracking",
    duration: "2025",
    image: "/ai-network.jpg",
    featured: false,
    challenge: "Tracking multiple occluded objects across video frames with minimal ID switches and 60+ FPS performance.",
    goal: "Build a low-latency tracking pipeline supporting webcam, video files, and RTSP streams.",
    solution: "Integrated YOLOv8 with ByteTrack association matrix and OpenCV acceleration.",
    highlights: [
      "YOLOv8 deep learning object detection at 60+ FPS",
      "ByteTrack multi-object tracking with low ID-switch rate",
      "Real-time zone intrusion and counting analytics",
      "RTSP IP camera and video stream batching"
    ]
  },
  {
    id: "6dof-robotic-arm",
    title: "6-DOF Precision Robotic Arm",
    subtitle: "6-degree-of-freedom robotic arm featuring analytical inverse kinematics solver, custom servo trajectory planning, and real-time IIR signal filtering.",
    category: "Robotics",
    industry: "Advanced Robotics",
    scope: "Kinematics & DSP",
    duration: "2025",
    image: "/robotic-arm.jpg",
    featured: false,
    challenge: "Achieving smooth trajectory planning and vibration-free motion execution across 6 mechanical joints.",
    goal: "Engineer an inverse kinematics solver with real-time digital filtering to control joint angles precisely.",
    solution: "Designed custom C++ kinematics algorithms and applied Infinite Impulse Response (IIR) filtering to eliminate servo jitter.",
    highlights: [
      "Analytical & numerical inverse kinematics solver",
      "Real-time IIR digital signal filtering for smooth movement",
      "Trajectory velocity and acceleration profiling",
      "ROS integration and hardware-in-the-loop testing"
    ]
  },
  {
    id: "gesture-controlled-car",
    title: "Glove Gesture-Controlled Mecanum Robotic Car",
    subtitle: "Omnidirectional mecanum robot vehicle wirelessly steered via MPU6050 6-axis IMU hand gestures over 2.4GHz nRF24L01 RF.",
    category: "IoT & DSP",
    industry: "Robotics · Wireless Hardware",
    scope: "ESP32 · IMU · RF Transceiver",
    duration: "2024",
    image: "/iot-system.jpg",
    featured: false,
    challenge: "Mapping subtle pitch and roll hand orientation changes to 4-wheel independent PWM signals without signal latency.",
    goal: "Construct a wearable sensing glove that directly controls omnidirectional robot maneuvers.",
    solution: "Integrated MPU-6050 complementary filter on ESP32 transmitting packetized control frames over nRF24L01.",
    highlights: [
      "MPU-6050 complementary sensor fusion (pitch & roll angles)",
      "nRF24L01 2.4GHz RF communication with sub-10ms latency",
      "Independent 4-wheel mecanum vector speed calculation",
      "Ergonomic 3D-printed wearable glove mount"
    ]
  },
  {
    id: "autonomous-school-bell",
    title: "Autonomous School Bell & Campus IoT System",
    subtitle: "ESP32-powered automated bell with web control portal, NTP clock synchronization, wireless OTA firmware updates, and convolution tone filtering.",
    category: "IoT & DSP",
    industry: "IoT · Embedded Systems",
    scope: "Hardware & Web Portal",
    duration: "2026",
    image: "/iot-system.jpg",
    featured: false,
    challenge: "Manual bell operations lacked remote scheduling, accuracy, and wireless configuration capabilities.",
    goal: "Engineer an autonomous bell system with web dashboard scheduling and OTA firmware updates.",
    solution: "Designed an ESP32 microcontroller system with NTP time sync, embedded web server, and convolution signal detection.",
    highlights: [
      "Real-time NTP clock sync with custom schedule matrix",
      "Over-The-Air (OTA) wireless firmware updates",
      "Embedded web server dashboard interface",
      "Convolution-based audio tone signal processing"
    ]
  },
  {
    id: "noise-monitoring",
    title: "Student Noise Monitoring System",
    subtitle: "Real-time acoustic analyzer using Fast Fourier Transform (FFT) frequency sampling and threshold alerting to maintain room discipline.",
    category: "IoT & DSP",
    industry: "Signal Processing · IoT",
    scope: "DSP & Microcontroller",
    duration: "2025",
    image: "/iot-system.jpg",
    featured: false,
    challenge: "Detecting sound level spikes while filtering background environmental hums.",
    goal: "Perform real-time FFT spectrum analysis on audio streams.",
    solution: "Deployed an ESP32 mic array using FFT algorithms to compute real-time decibel metrics.",
    highlights: [
      "Real-time Fast Fourier Transform (FFT) signal processing",
      "Decibel (dBA) threshold log alerts",
      "Visual RGB traffic-light status indicator",
      "WiFi cloud dashboard logging"
    ]
  },
  {
    id: "cardgen-id-platform",
    title: "CardGen Enterprise ID & Credential Platform",
    subtitle: "Enterprise identity and credential issuance platform featuring custom HTML5 Canvas templates, dynamic QR generation, and batch export.",
    category: "Web3 & Enterprise",
    industry: "Enterprise SaaS · Identity",
    scope: "TypeScript · Node.js · Canvas",
    duration: "2025",
    image: "/ai-network.jpg",
    featured: false,
    challenge: "Generating hundreds of pixel-perfect identity cards with dynamic barcoding and fast PDF/image exports.",
    goal: "Build a scalable, template-driven credential generator for institutions and businesses.",
    solution: "Built high-performance Canvas rendering engine with bulk CSV import and automated layout alignment.",
    highlights: [
      "Dynamic Canvas template engine with vector typography",
      "Automated QR code & barcode encoding",
      "Batch CSV student/employee data ingestion",
      "High-resolution print-ready PDF export"
    ]
  },
  {
    id: "crypto-trading-bot",
    title: "Solana DEX Arbitrage & Auto-Trading Bot",
    subtitle: "Low-latency cryptocurrency trading bot with real-time WebSocket orderbook tracking, DEX arbitrage route detection, and automated execution.",
    category: "Web3 & Enterprise",
    industry: "FinTech · Web3 · Trading",
    scope: "Solana · WebSockets · Rust/TS",
    duration: "2025",
    image: "/ai-network.jpg",
    featured: false,
    challenge: "Detecting cross-pool price discrepancies and executing swaps ahead of price slippage on decentralized exchanges.",
    goal: "Develop an automated trading engine with real-time UI dashboard and risk management safeguards.",
    solution: "Engineered WebSocket RPC streaming, mempool monitoring, and multi-hop DEX routing algorithms.",
    highlights: [
      "Real-time WebSocket market depth and orderbook streaming",
      "Cross-DEX liquidity pool arbitrage calculation",
      "Automated stop-loss, take-profit, and slippage guardrails",
      "Interactive analytics dashboard with live PnL tracking"
    ]
  },
  {
    id: "orange-future-tech",
    title: "Orange Future Tech Enterprise Platform",
    subtitle: "Corporate engineering platform for industrial electronics, robotics automation equipment, and STEM robotics education.",
    category: "Web3 & Enterprise",
    industry: "Enterprise Web · Robotics Tech",
    scope: "Full-Stack Web Architecture",
    duration: "2025",
    image: "/ai-network.jpg",
    featured: false,
    challenge: "Creating a cohesive platform showcasing industrial robotics hardware, consulting services, and curriculum catalogs.",
    goal: "Design and deploy a modern high-performance portal with responsive UI and booking systems.",
    solution: "Developed with modern React, Tailwind CSS, high-contrast layouts, and automated inquiry routing.",
    highlights: [
      "Industrial automation service showcase",
      "Interactive robotics curriculum catalog",
      "Integrated booking and inquiry pipeline",
      "SEO-optimized responsive architecture"
    ]
  },
  {
    id: "flight-simulator-cockpit",
    title: "Flight Simulator Hardware Cockpit",
    subtitle: "Hardware cockpit panel integrated with Microsoft Flight Simulator — physical controls, custom multi-layer PCB, and SimConnect API.",
    category: "Hardware",
    industry: "Avionics & Hardware",
    scope: "Custom PCB Layout",
    duration: "2024",
    image: "/iot-system.jpg",
    featured: false,
    challenge: "Multiplexing dozens of switches, encoders, and analog gauges into flight sim software with zero latency.",
    goal: "Design custom PCB hardware interface for real-time flight controls.",
    solution: "Designed multi-layer custom PCB using Eagle CAD with SimConnect API integration.",
    highlights: [
      "Custom multi-layer PCB layout design",
      "Hardware-in-the-loop (HIL) signal routing",
      "Rotary encoder and analog switch multiplexing",
      "MSFS SimConnect API integration"
    ]
  },
  {
    id: "deep-well-scout",
    title: "Deep Well Scout Submersible Probe",
    subtitle: "Submersible inspection robot with live video transmission, custom IP68 waterproof PCB, and real-time aquatic sensor telemetry.",
    category: "Robotics",
    industry: "Submersible Robotics",
    scope: "PCB & Mechatronics",
    duration: "2024",
    image: "/robotic-arm.jpg",
    featured: false,
    challenge: "Designing waterproof pressure-resistant electronics for underwater exploration.",
    goal: "Build a submersible probe with HD video transmission and diagnostics.",
    solution: "Designed a multi-layer sealed PCB housed in IP68 waterproof casing.",
    highlights: [
      "IP68 waterproof sealed enclosure rating",
      "Live HD camera video streaming over tethered link",
      "Water pressure and depth telemetry",
      "Custom waterproof PCB circuit design"
    ]
  }
];

export const SKILLS = [
  {
    id: "cuda-gpu",
    title: "GPU Computing & CUDA",
    description: "High-performance parallel computing with C++/CUDA, 2D shared-memory tiling, Canny/Sobel filters, and TensorRT optimization.",
    tools: ["C++", "CUDA", "Shared Memory", "OpenCV GPU", "TensorRT", "GPU Profiling"]
  },
  {
    id: "ai-agents-llm",
    title: "AI Systems, LLMs & Agents",
    description: "Fine-tuning open models with QLoRA/PEFT, orchestrating multi-agent state graphs via LangGraph, and RAG retrieval pipelines.",
    tools: ["PyTorch", "LangChain", "LangGraph", "QLoRA / PEFT", "ChromaDB", "YOLOv8"]
  },
  {
    id: "robotics-ros",
    title: "Advanced Robotics & Kinematics",
    description: "Industrial & research robotics programming with forward/inverse kinematics, ROS2 control loops, CAN bus drivers, and trajectory planning.",
    tools: ["ROS2", "Unitree Z1 SDK", "MoveIt2", "Inverse Kinematics", "CAN Bus", "Gazebo"]
  },
  {
    id: "distributed-systems",
    title: "Distributed Systems & Backend",
    description: "Architecting horizontal database sharding with consistent hashing, virtual node replication, Docker containerization, and REST APIs.",
    tools: ["PostgreSQL", "Consistent Hashing", "Docker", "Python / FastAPI", "TypeScript", "Node.js"]
  },
  {
    id: "iot-dsp",
    title: "IoT, Embedded & Digital Signal Processing",
    description: "Microcontroller system design with real-time FFT/IIR signal sampling, ESP32/ESP8266, PCB layout, and low-latency wireless telemetry.",
    tools: ["ESP32 / ESP8266", "FFT & IIR Filtering", "Eagle CAD", "MQTT", "nRF24L01", "MPU6050"]
  },
  {
    id: "web3-enterprise",
    title: "Web3 & Enterprise Architecture",
    description: "Decentralized applications, Solidity smart contracts, Solana DEX bots, and modern React/Vite web application platforms.",
    tools: ["Solidity", "Ethereum", "Web3.js", "Solana RPC", "React / Vite", "Tailwind CSS"]
  }
];

export const EDUCATION = [
  {
    degree: "M.Tech in Artificial Intelligence",
    institution: "Indian Institute of Technology (IIT) Jodhpur",
    period: "2024 - 2026 (Pursuing)",
    description: "Specializing in Advanced Robotics, Neural Networks, GPU Acceleration, MLOps, and Digital Signal Processing."
  },
  {
    degree: "B.Tech in Electronics Engineering",
    institution: "SRGC Engineering College",
    period: "2020 - 2024",
    description: "Graduated with honors. Specialization in Embedded Systems, Microcontrollers, and PCB Design."
  }
];

export const CERTIFICATIONS = [
  "Ethereum Developer Degree",
  "AI Developer Degree",
  "Advanced Workshop on IoT & Robotics",
  "3rd National Online Quiz (Insolvency & Bankruptcy Code)",
  "18th SOF National Science Olympiad"
];

export const ARTICLES = [
  {
    id: "cuda-canny-edge",
    slug: "cuda-real-time-canny-edge-detection",
    title: "Accelerating Canny Edge Detection with 2D Shared-Memory Tiling in CUDA",
    summary: "A deep dive into optimizing 2D Sobel convolutions, non-maximum suppression, and hysteresis thresholding on NVIDIA GPUs using CUDA shared memory.",
    category: "GPU Computing",
    date: "2026",
    readTime: "7 min read",
    content: `
# Accelerating Canny Edge Detection with 2D Shared-Memory Tiling in CUDA

Computer vision applications requiring real-time high-definition video processing often encounter severe latency bottlenecks when executing spatial convolution filters on CPU architectures.

### The Memory Bottleneck in Sobel Filtering
In a standard naive CUDA implementation of a 2D convolution kernel, each thread fetches neighboring pixels directly from global device memory. Because adjacent threads access heavily overlapping 3x3 pixel neighborhoods, redundant memory transactions degrade memory bandwidth.

### Shared-Memory Tiling Solution
By allocating a shared memory tile with boundary halo cells:
- Each CUDA thread block loads its corresponding pixel block into high-speed on-chip SRAM (\`__shared__\`).
- Threads synchronize via \`__syncthreads()\`.
- All subsequent horizontal (\`Gx\`) and vertical (\`Gy\`) Sobel gradients are computed from on-chip SRAM with zero global memory contention.

### 4-Stage Canny GPU Pipeline
1. **Gaussian Smoothing**: Eliminates high-frequency sensor noise.
2. **Gradient Magnitude & Direction**: Computes $|G| = \sqrt{Gx^2 + Gy^2}$ and $\theta = \arctan(Gy / Gx)$.
3. **Non-Maximum Suppression (NMS)**: Thin edges by retaining only local gradient peaks along direction bins (0°, 45°, 90°, 135°).
4. **Hysteresis Thresholding**: Two-stage thresholding ($T_{high}$ and $T_{low}$) connected via recursive thread-safe edge tracing.
    `
  },
  {
    id: "unitree-z1-kinematics",
    slug: "unitree-z1-kinematics-and-trajectory-planning",
    title: "Analytical Inverse Kinematics & Trajectory Profiling for Robotic Arms",
    summary: "Techniques for controlling multi-joint robotic arms with CAN bus interfaces, Denavit-Hartenberg parameters, and IIR trajectory vibration damping.",
    category: "Robotics",
    date: "2025",
    readTime: "6 min read",
    content: `
# Analytical Inverse Kinematics & Trajectory Profiling for Robotic Arms

Manipulating multi-axis robotic arms with precision requires robust kinematics algorithms and real-time motor command interpolation.

### Denavit-Hartenberg (D-H) Parameter Formulation
The forward kinematics of the 6-DOF kinematic chain are solved by establishing coordinate frames at each rotational joint and constructing homogenous transformation matrices $T_i^{i-1}$.

### Inverse Kinematics & Singularities
While numerical Jacobian-transpose methods can iteratively approximate target end-effector poses, closed-form analytical solutions provide deterministic microsecond resolution essential for hard real-time ROS2 control loops.

### IIR Filtered Trajectory Smoothing
Sudden step changes in target Cartesian velocity generate mechanical resonance and motor jitter. By applying a digital Infinite Impulse Response (IIR) low-pass filter to joint position setpoints, acceleration spikes are dampened without introducing noticeable lag.
    `
  },
  {
    id: "distributed-db-sharding",
    slug: "consistent-hashing-database-sharding",
    title: "Designing Horizontal Database Sharding with Consistent Hash Rings",
    summary: "Architectural blueprint for building zero-downtime distributed sharding using MD5 virtual nodes and scatter-gather query routers.",
    category: "Distributed Systems",
    date: "2025",
    readTime: "8 min read",
    content: `
# Designing Horizontal Database Sharding with Consistent Hash Rings

As transactional data scales beyond single-node storage limits, horizontal partitioning (sharding) becomes essential for query scalability and fault tolerance.

### The Limitation of Modulo Sharding
Traditional modulo hashing (\`hash(key) % N\`) requires redistributing nearly 100% of keys whenever a node is added or removed.

### The Consistent Hashing Ring
By mapping both database nodes and record partition keys onto a continuous $2^{32} - 1$ hash space ring:
- Keys are assigned to the nearest clockwise node.
- Adding a new shard node only transfers keys from its immediate successor ($\approx 1/N$ data movement).
- Employing virtual nodes (e.g. 150 virtual points per physical shard) ensures uniform hash distribution across non-uniform hardware.
    `
  }
];

export const FAQS = [
  {
    question: "What is Shashank's educational background and focus area?",
    answer: "Shashank is currently an M.Tech scholar in Artificial Intelligence at IIT Jodhpur (Graduation 2026) and holds a B.Tech in Electronics Engineering. His core focus spans Autonomous Robotics (ROS2 & Kinematics), GPU High-Performance Computing (CUDA), Distributed Systems, and MLOps."
  },
  {
    question: "What hardware and robotics platforms does Shashank specialize in?",
    answer: "Industrial and research platforms including the Unitree Z1 robotic arm, Robodog GO-2, Humanoid G1, 6-DOF robotic arms, ROS2 MoveIt2, ESP32/ESP8266 microcontrollers, CAN bus motor drivers, and multi-layer custom PCB design (Eagle CAD)."
  },
  {
    question: "What AI and deep learning frameworks does Shashank use?",
    answer: "PyTorch, CUDA C++, TensorRT, HuggingFace (PEFT, LoRA, TRL), LangChain, LangGraph, ChromaDB, OpenCV, YOLOv8, and high-throughput streaming LLM integrations with Groq."
  },
  {
    question: "How does the AI Twin assistant work?",
    answer: "The AI Twin is a specialized neural assistant powered by Groq's streaming LLM inference engine, equipped with comprehensive knowledge of all of Shashank's engineering projects, research papers, and technical stack."
  },
  {
    question: "What certifications and recognitions does Shashank hold?",
    answer: "Ethereum Developer Degree, AI Developer Degree, Advanced Workshop on IoT & Robotics, 3rd National Online Quiz (Insolvency & Bankruptcy Code), and 18th SOF National Science Olympiad."
  }
];
