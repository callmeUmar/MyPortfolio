export type ExperienceItem = {
  id: string;
  role: string;
  company: string;
  location?: string;
  start: string;
  end: string;
  bullets: string[];
  tags?: string[];
  link?: string;
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "canva-extern",
    role: "AI Design & Data Storytelling Extern",
    company: "Canva",
    location: "Remote",
    start: "November 2025",
    end: "Present",
    bullets: [
      "Designed a modular AI content-generation pipeline enabling teams to produce tailored narratives at scale, increasing output efficiency by 45%.",
      "Built an adaptive data-cleaning engine that normalized inconsistent inputs across datasets, reducing formatting and processing errors by 30%.",
      "Improved cross-team collaboration by implementing structured content schemas, boosting workflow clarity and cutting communication overhead by 35%."
    ],
    tags: [
      "Python",
      "AI Systems",
      "Data Pipelines",
      "Content Automation",
      "LLM Integration",
      "FastAPI",
      "Collaboration Tools",
      "Workflow Optimization"
    ],
    link: "https://www.canva.com/"
  },
  {
    id: "kentush",
    role: "Software Engineer Intern",
    company: "Kentush Micro-credit",
    location: "Bishkek, Kyrgyzstan",
    start: "March 2024",
    end: "June 2024",
    bullets: [
      "Developed an ML-driven credit-risk evaluation system preventing 500+ high-risk loan issuances and reducing decision errors by 40%.",
      "Optimized API performance by redesigning endpoints with asynchronous FastAPI, reducing average response time from 4.5s → 1.8s.",
      "Improved PyTorch model inference throughput by optimizing preprocessing pipelines, cutting latency by 52% and stabilizing performance under load."
    ],
    tags: [
      "Python",
      "FastAPI",
      "PyTorch",
      "Docker",
      "Machine Learning",
      "Data Engineering",
      "API Development",
      "Model Optimization",
      "Microservices",
      "SQL"
    ],
    link: ""
  },
  {
    id: "bc-cs-ta",
    role: "Computer Science Teaching Assistant",
    company: "Bellevue College",
    location: "Bellevue, WA",
    start: "June 2025",
    end: "Present",
    bullets: [
      "Tutored 50+ students in Java (CS210/CS211), covering recursion, OOP design, inheritance, linked structures, arrays, and debugging patterns.",
      "Helped students improve assignment completion and code quality through targeted problem-solving guidance and step-by-step logic explanation.",
      "Provided hands-on debugging sessions, clarifying runtime errors, algorithmic reasoning, and best practices for clean and maintainable Java code."
    ],
    tags: ["Java", "Teaching", "CS210", "CS211", "OOP", "Debugging", "Data Structures"],
    link: "https://www.bellevuecollege.edu/"
  },
  {
    id: "bc-ta",
    role: "Software Engineer (Part-Time)",
    company: "IUK College NOMAD",
    location: "Bishkek, Kyrgyzstan",
    start: "June 2023",
    end: "March 2024",
    bullets: [
      "Contributed to the design, development and deployment of a campus-wide security program significantly enhancing college safety protocols.",
      "Assisted in configuring, testing and optimizing network and data protection tools to strengthen cybersecurity measures.",
      "Collaborated closely with the IT team to improve system reliability, proactively safeguarding against potential threats and vulnerabilities."
    ],
    tags: ["Python", "Data Analytics", "Data Bases", "SQL", "Cybersecurity"],
    link: "https://nomadcollege.kg/"
  }
];