// ─────────────────────────────────────────────────────────────
//  portfolioData.js
//  This is the single source of truth for all personal info.
//  Update this file to change anything on the website.
// ─────────────────────────────────────────────────────────────

export const personal = {
  name: "Tahamim Islam",
  firstName: "Tahamim",
  role: "CSE Undergraduate Student",
  tagline: "AI / ML Engineer in the Making",
  bio: "Building intelligent systems and modern web applications with Python, React, FastAPI and Machine Learning.",

  // ── Update these with your real links ──
  email: "your.email@example.com",          // ← replace with your email
  github: "https://github.com/yourusername", // ← replace with your GitHub profile
  linkedin: "https://linkedin.com/in/yourusername", // ← replace with your LinkedIn

  // ── CV download link (place cv.pdf in /public) ──
  cvLink: "/cv.pdf",

  about: `I'm a Computer Science and Engineering undergraduate student at United International University, 
  passionate about the intersection of Artificial Intelligence, Machine Learning, and software engineering. 
  I enjoy building projects that combine clean backend architecture with intelligent data-driven systems.
  
  Currently focused on deepening my understanding of machine learning algorithms, data science workflows, 
  and building scalable APIs with FastAPI. I'm actively working on personal projects that bridge theoretical 
  AI concepts with practical web applications.`,
};

export const skills = [
  {
    category: "Programming",
    items: ["Python", "C++", "JavaScript", "SQL"],
  },
  {
    category: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    category: "Backend",
    items: ["FastAPI", "REST API"],
  },
  {
    category: "AI / ML",
    items: ["NumPy", "Pandas", "Scikit-learn", "Machine Learning"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub"],
  },
];

export const projects = [
  {
    number: "01",
    title: "AI Screenshot to Code",
    description:
      "An AI-powered application that converts UI screenshots into functional frontend code automatically. Leverages a vision-capable AI API to analyze design screenshots and generate clean HTML/CSS/React components.",
    tech: ["React", "FastAPI", "AI API", "Python"],
    github: "#",     // ← replace with your GitHub repo link
    demo: "#",       // ← replace with your live demo link
    status: "In Progress",
  },
  {
    number: "02",
    title: "Patient Management API",
    description:
      "A REST API for managing patient records built with FastAPI. Implements CRUD operations, data validation with Pydantic, and a clean endpoint architecture following REST best practices.",
    tech: ["Python", "FastAPI", "Pydantic", "REST API"],
    github: "#",     // ← replace with your GitHub repo link
    demo: "#",       // ← replace with your live demo link
    status: "Completed",
  },
  {
    number: "03",
    title: "Machine Learning Project",
    description:
      "A machine learning application focused on data preprocessing, exploratory data analysis, model training, evaluation, and prediction. Implements multiple ML algorithms and compares their performance.",
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn"],
    github: "#",     // ← replace with your GitHub repo link
    demo: "#",       // ← replace with your live demo link
    status: "Completed",
  },
];

export const education = [
  {
    degree: "Bachelor of Science in Computer Science & Engineering",
    institution: "United International University",
    period: "2024 – Present",
    status: "Ongoing",
    location: "Dhaka, Bangladesh",
  },
];

export const focusAreas = [
  {
    title: "Artificial Intelligence",
    description: "Exploring AI concepts, architectures, and applications in real-world systems.",
    icon: "Brain",
  },
  {
    title: "Machine Learning",
    description: "Building and training models using classical and modern ML techniques.",
    icon: "Cpu",
  },
  {
    title: "Data Science",
    description: "Working with data through analysis, visualization, and feature engineering.",
    icon: "BarChart2",
  },
  {
    title: "Data Structures & Algorithms",
    description: "Strengthening problem-solving skills and computational thinking.",
    icon: "GitBranch",
  },
  {
    title: "Backend Development",
    description: "Designing scalable APIs and server-side systems with FastAPI and Python.",
    icon: "Server",
  },
  {
    title: "AI-powered Web Apps",
    description: "Combining AI capabilities with modern web technologies to build smart applications.",
    icon: "Layers",
  },
];
