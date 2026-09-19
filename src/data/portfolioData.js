// ─────────────────────────────────────────────────────────────
//  portfolioData.js
//  This is the single source of truth for all personal info.
//  Update this file to change anything on the website.
// ─────────────────────────────────────────────────────────────

export const personal = {
  name: "Tahamim Islam",
  firstName: "Tahamim",
  role: "CSE Undergraduate Student",
  tagline: "Aspiring AI Engineer",
  bio: "Building intelligent systems and modern web applications with Python, React, FastAPI and Machine Learning.",

  // ── Update these with your real links ──
  email: "tahamim81@gmail.com",
  github: "https://github.com/tahamimislam",
  linkedin: "https://www.linkedin.com/in/tahamim-islam-25a71528b/",
  leetcode: "https://leetcode.com/u/tahamimislam/",
  codeforces: "https://codeforces.com/profile/Tahamim",
  pexels: "https://www.pexels.com/@tahamim/",

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
    items: ["Python", "C++", "JavaScript", "TypeScript", "SQL"],
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
    items: ["NumPy", "Pandas", "Scikit-learn"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub"],
  },
];

export const projects = [
  {
    number: "01",
    title: "HumanityLink",
    description:
      "HumanityLink is a community-focused web platform designed to connect people who need assistance with people and organizations that can provide support.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    github: "https://github.com/tahamimislam/DBMS_project",
    status: "In Progress",
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
    title: "Full Stack Web Development",
    description: "Building responsive and scalable web applications from front to back.",
    icon: "Globe",
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
