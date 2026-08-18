export const SITE_METADATA = {
  name: "Shashank Jangid",
  title: "IIT Engineer · AI · IoT · Web3",
  tagline: "Building autonomous robotics, intelligent IoT hardware, and decentralized Web3 systems.",
  bio: "M.Tech AI Scholar at IIT Jodhpur & Electronics Engineer. Dedicated to engineering autonomous robotics (kinematics & ROS), signal processing (FFT & filtering), embedded hardware (ESP32/PCB), and Web3 smart contracts.",
  status: "Available for Opportunities",
  email: "Shashankjangidofficial@gmail.com",
  phone: "+91 89583 47428",
  linkedin: "https://linkedin.com/in/Shashank_Jangid",
  location: "IIT Jodhpur, Rajasthan, India",
  yearsExperience: "4+",
  projectsDelivered: "20+",
  certificationsCount: "5+",
  degree: "M.Tech AI (IIT Jodhpur) · B.Tech Electronics",
  graduationYear: "2026",
  groqKeyDefault: import.meta.env.VITE_GROQ_API_KEY || "",
};

export const PROJECTS = [
  {
    id: "autonomous-school-bell",
    title: "Autonomous School Bell System",
    subtitle: "ESP32-powered automated bell with web control portal, NTP clock synchronization, wireless OTA firmware updates, and convolution tone filtering.",
    category: "IoT",
    industry: "IoT · Embedded Systems",
    scope: "Hardware & Web Portal",
    duration: "2026",
    image: "/iot-system.jpg",
    featured: true,
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
    id: "6dof-robotic-arm",
    title: "6-DOF Precision Robotic Arm",
    subtitle: "6-degree-of-freedom robotic arm featuring analytical inverse kinematics solver, custom servo trajectory planning, and real-time IIR signal filtering.",
    category: "Robotics",
    industry: "Advanced Robotics",
    scope: "Kinematics & DSP",
    duration: "2025",
    image: "/robotic-arm.jpg",
    featured: true,
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
    id: "noise-monitoring",
    title: "Student Noise Monitoring System",
    subtitle: "Real-time acoustic analyzer using Fast Fourier Transform (FFT) frequency sampling and threshold alerting to maintain room discipline.",
    category: "IoT",
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
    id: "blindman-aid",
    title: "Blindman Assistive Wearable Tool",
    subtitle: "Wearable assistive device using ultrasonic ranging, haptic vibration feedback, and onboard ML to guide visually impaired users safely.",
    category: "AI",
    industry: "Assistive Technology",
    scope: "AI & Wearables",
    duration: "2025",
    image: "/ai-network.jpg",
    featured: false,
    challenge: "Providing spatial guidance without obscuring natural hearing.",
    goal: "Build a low-latency wearable spatial replacement tool with haptic feedback.",
    solution: "Integrated ultrasonic sensor arrays with micro-haptic vibration motors and tinyML proximity classification.",
    highlights: [
      "Multi-directional ultrasonic echo distance ranging",
      "Haptic vibration frequency modulation",
      "Ergonomic wearable hardware casing",
      "Rechargeable low-power battery unit"
    ]
  },
  {
    id: "plant-ambassador",
    title: "Plant Ambassador Care Robot",
    subtitle: "Autonomous mobile plant-care robot with soil moisture convolution analysis, automated watering pump, and remote tracking dashboard.",
    category: "Robotics",
    industry: "AgriTech · Robotics",
    scope: "Robotics & IoT",
    duration: "2025",
    image: "/robotic-arm.jpg",
    featured: false,
    challenge: "Automating plant care with mobile robotic mobility and soil health diagnostics.",
    goal: "Construct a mobile robot capable of monitoring and watering plants autonomously.",
    solution: "Combined mobile robot chassis with capacitive soil sensors and automated pump actuators.",
    highlights: [
      "Autonomous mobile navigation chassis",
      "Capacitive soil moisture convolution analysis",
      "Automated peristaltic watering mechanism",
      "IoT telemetry analytics app"
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
  },
  {
    id: "glove-gesture-car",
    title: "Glove Gesture Controlled Robotic Car",
    subtitle: "Wireless robotic vehicle controlled by hand gestures via MPU-6050 gyroscope glove and 2.4GHz RF communication.",
    category: "IoT",
    industry: "Wireless Systems",
    scope: "Sensors & RF",
    duration: "2024",
    image: "/iot-system.jpg",
    featured: false,
    challenge: "Translating hand orientation angles into low-latency wireless vehicle control signals.",
    goal: "Build a wearable motion-sensing glove paired with a responsive 4-wheel robot vehicle.",
    solution: "Used MPU-6050 IMU accelerometer/gyroscope with NRF24L01 2.4GHz RF transceivers.",
    highlights: [
      "MPU-6050 6-axis IMU pitch/roll calculation",
      "NRF24L01 2.4GHz RF wireless communication",
      "Differential drive DC motor control",
      "Ultra-low latency motion mapping"
    ]
  },
  {
    id: "smart-waste-segregation",
    title: "Smart Waste Segregation AI Bin",
    subtitle: "AI-powered waste classifier using convolutional neural networks (CNNs) and high-torque servo flap actuation to sort recyclables.",
    category: "AI",
    industry: "AI & Computer Vision",
    scope: "CV & Servo Actuation",
    duration: "2024",
    image: "/ai-network.jpg",
    featured: false,
    challenge: "Classifying trash under variable lighting conditions.",
    goal: "Build an automated bin sorting waste into recyclable, organic, and non-recyclable bins.",
    solution: "Trained CNN computer vision model deployed to an edge device with servo flap actuation.",
    highlights: [
      "Convolutional Neural Network (CNN) image classification",
      "Real-time edge device inference execution",
      "High-torque servo flap sorting actuation",
      "Automatic capacity level sensing"
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
    challenge: "Multiplexing dozens of switches, encoders, and analog gauges into flight sim software.",
    goal: "Design custom PCB hardware interface for real-time flight controls.",
    solution: "Designed multi-layer custom PCB using Eagle CAD with SimConnect integration.",
    highlights: [
      "Custom multi-layer PCB layout design",
      "Hardware-in-the-loop (HIL) signal routing",
      "Rotary encoder and analog switch multiplexing",
      "MSFS SimConnect API integration"
    ]
  },
  {
    id: "smart-home-automation",
    title: "ESP8266 Smart Home Automation",
    subtitle: "IoT home automation using ESP-8266 and opto-isolated relay boards — appliances and lighting controlled via web application.",
    category: "IoT",
    industry: "Home Automation",
    scope: "IoT Relays & Web App",
    duration: "2023",
    image: "/iot-system.jpg",
    featured: false,
    challenge: "Interfacing high-voltage AC home appliances with low-voltage microcontrollers safely.",
    goal: "Build a reliable remote control web dashboard for home appliances.",
    solution: "Opto-isolated relay boards connected to ESP-8266 with MQTT web server control.",
    highlights: [
      "Opto-isolated 8-channel relay switching",
      "MQTT protocol real-time web control",
      "Manual switch state synchronization",
      "ESP-8266 local web server fallback"
    ]
  },
  {
    id: "commercial-web-apps",
    title: "Commercial Touch Kiosk & Web Portals",
    subtitle: "Suite of responsive commercial web applications including DPSI Know About INDIA Kiosk, Roots of Purity, Yatrabaazar & PureDrops.",
    category: "Web",
    industry: "Full-Stack Web Apps",
    scope: "React & RESTful APIs",
    duration: "2024",
    image: "/ai-network.jpg",
    featured: false,
    challenge: "Designing responsive, high-performance web platforms for touch kiosks and e-commerce.",
    goal: "Build clean, interactive web experiences integrated with RESTful APIs.",
    solution: "Developed custom web platforms using HTML5, CSS3, JavaScript, React, and REST APIs.",
    highlights: [
      "Touchscreen interactive kiosk user interface",
      "E-commerce product catalog & checkout",
      "RESTful API integration & state management",
      "Ultra-responsive mobile and desktop layouts"
    ]
  }
];

export const SKILLS = [
  {
    id: "robotics",
    title: "Advanced Robotics & ROS",
    description: "Industrial & research robotics programming with real-time kinematics, ROS control loops, and motion planning.",
    tools: ["Unitree Z1-Ops", "Robodog GO-2", "Humanoid G1", "6-DOF Arm", "ROS"]
  },
  {
    id: "iot",
    title: "IoT & Embedded Hardware",
    description: "Microcontroller system design with real-time signal sampling, ESP32/ESP8266, PCB layout, and wireless telemetry.",
    tools: ["ESP32/ESP8266", "Arduino", "PCB Design", "Eagle CAD", "TinkerCad"]
  },
  {
    id: "ai-mlops",
    title: "AI Systems & MLOps",
    description: "Deploying machine learning models, streaming LLMs, Fast Fourier Transforms (FFT), convolution, and AI DevOps.",
    tools: ["LLM Integration", "MLOps", "AI DevOps", "Signal Sampling", "Computer Vision"]
  },
  {
    id: "web3",
    title: "Blockchain & Web3 DApps",
    description: "Smart contract development in Solidity, NFT protocols, and Ethereum decentralized application (DApp) architectures.",
    tools: ["Solidity", "Ethereum", "NFTs", "Web3.js", "Smart Contracts"]
  },
  {
    id: "pcb",
    title: "PCB Schematic & Prototyping",
    description: "Multi-layer PCB schematic capture, Gerber generation, DFM rules, and hardware circuit prototyping.",
    tools: ["Eagle CAD", "Schematic Capture", "DFM Rules", "Multilayer PCB"]
  },
  {
    id: "programming",
    title: "Full-Stack Software Code",
    description: "Versatile across low-level C/C++ embedded microcontrollers, Python AI scripts, and full-stack web applications.",
    tools: ["Python", "C/C++", "Solidity", "JavaScript/React", "Embedded C++"]
  }
];

export const EDUCATION = [
  {
    degree: "M.Tech in Artificial Intelligence",
    institution: "Indian Institute of Technology (IIT) Jodhpur",
    period: "2024 - 2026 (Pursuing)",
    description: "Focusing on Advanced Robotics, Neural Networks, MLOps, and Signal Processing."
  },
  {
    degree: "B.Tech in Electronics Engineering",
    institution: "SRGC Engineering College",
    period: "2020 - 2024",
    description: "Graduated with honors. Specialization in Embedded Systems, PCB Design, and Microcontrollers."
  }
];

export const CERTIFICATIONS = [
  "Ethereum Developer Degree",
  "AI Developer Degree",
  "Advanced Workshop on IoT & Robotics",
  "3rd National Online Quiz (Insolvency & Bankruptcy Code)",
  "18th SOF National Science Olympiad"
];

export const FAQS = [
  {
    question: "What is Shashank's educational background?",
    answer: "Shashank is currently pursuing his M.Tech in Artificial Intelligence from IIT Jodhpur (Graduation 2026) and completed his B.Tech in Electronics Engineering from SRGC."
  },
  {
    question: "What hardware and robotics platforms does Shashank specialize in?",
    answer: "Advanced robotics including Unitree Z1-Ops, Robodog GO-2, Humanoid G1, 6-DOF Robotic Arms, ROS, ESP32/ESP8266 microcontrollers, multi-layer PCB design, and Arduino."
  },
  {
    question: "How does the AI Twin Assistant work?",
    answer: "The AI Twin Assistant uses a direct Groq API integration powered by Llama-3.3-70B model, delivering real-time sanitized responses about Shashank's projects and research."
  },
  {
    question: "What certifications does Shashank hold?",
    answer: "Ethereum Developer Degree, AI Developer Degree, Advanced Workshop on IoT, 3rd National Online Quiz (IBC), and 18th SOF National Science Olympiad."
  }
];
