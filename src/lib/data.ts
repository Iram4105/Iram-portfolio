// All content below is sourced directly from Iram's resume.
// Anything not present in the resume is marked with a clear [PLACEHOLDER] value —
// search for "PLACEHOLDER" to find every field that needs a real value before launch.

export const personal = {
  name: "Iram",
  role: "Java Backend Developer",
  roles: [
    "Java Backend Developer",
    "Aspiring Software Engineer",
    "B.Tech CSE Student",
  ],
  tagline:
    "Building reliable, database-driven backend systems — from a full-featured banking engine to a Spring & Hibernate complaint portal.",
  email: "iramjavedali@gmail.com",
  phone: "+91 7017541410",
  location: "Sardhana, Meerut, Uttar Pradesh, India",
  linkedin: "https://linkedin.com/in/iram-61aa30297",
  github: "https://github.com/Iram4105",
  leetcode: "https://leetcode.com/u/Iram010/",
  gfg: "https://geeksforgeeks.org/user/PLACEHOLDER", // PLACEHOLDER: GFG profile URL not in resume
  resumeFile: "/resume.pdf",
  siteUrl: "https://iram-portfolio.vercel.app", // PLACEHOLDER: replace with real deployed domain
  ogImage: "/og-image.png",
};

export const about = {
  summary:
    "Computer Science undergraduate (CGPA 8.61/10, 4th Year) with hands-on experience in Core Java, object-oriented design, and relational database systems — gained through building end-to-end applications including a full-featured banking system and a Spring/Hibernate-based complaint management portal.",
  goal:
    "Seeking a Java Developer / Software Engineer role or internship at a service-based or product-based organisation, to contribute to backend service design, REST API development, and database-driven application architecture — while growing into Spring Boot, microservices, and cloud-native tooling within a collaborative engineering team.",
  strengths: [
    {
      title: "Backend-first mindset",
      desc: "Comfortable designing layered Java web architecture — JSP, Spring, Hibernate, and MySQL working together.",
    },
    {
      title: "Data-driven problem solving",
      desc: "Applies ML fundamentals (TF-IDF, cosine similarity, content-based filtering) alongside traditional backend work.",
    },
    {
      title: "Continuous learner",
      desc: "Currently strengthening Spring Boot, Microservices, Hibernate/JPA, and cloud fundamentals alongside coursework.",
    },
  ],
  stats: [
    { label: "CGPA", value: "8.61", suffix: "/10" },
    { label: "LeetCode Problems Solved", value: "100", suffix: "+" },
    { label: "Academic Projects", value: "4", suffix: "+" },
    { label: "Certifications", value: "2", suffix: "" },
  ],
};

export const education = [
  {
    degree: "B.Tech in Computer Science Engineering",
    institution: "Meerut Institute of Engineering & Technology (MIET), AKTU Lucknow",
    duration: "2023 – 2027",
    detail: "CGPA: 8.61 / 10  •  Currently in 7th Semester (4th Year)",
  },
  {
    degree: "Senior Secondary (12th), CBSE",
    institution: "K.K. Public School",
    duration: "2023",
    detail: "Percentage: 93.2%",
  },
  {
    degree: "Secondary (10th), CBSE",
    institution: "K.K. Public School",
    duration: "2021",
    detail: "Percentage: 95%",
  },
];

export type SkillCategory = {
  category: string;
  skills: { name: string; level: number }[];
};

// level is an approximate proficiency indicator (0-100) for the progress bar UI,
// inferred only from how the resume frames each skill (e.g. "basics" vs core listed skills).
export const skills: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Java (8+)", level: 88 },
      { name: "Python", level: 78 },
      { name: "SQL", level: 80 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Core Java & OOP", level: 88 },
      { name: "Spring / Spring MVC", level: 75 },
      { name: "Spring Boot (basics)", level: 60 },
      { name: "Hibernate (ORM)", level: 72 },
      { name: "JSP & Servlets", level: 75 },
      { name: "REST APIs", level: 70 },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "HTML", level: 75 },
      { name: "CSS", level: 70 },
      { name: "TypeScript", level: 65 },
      { name: "Tailwind CSS", level: 65 },
      { name: "Node.js", level: 60 },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MySQL / RDBMS", level: 80 },
      { name: "MongoDB (Certified)", level: 70 },
    ],
  },
  {
    category: "Frameworks",
    skills: [
      { name: "Spring", level: 75 },
      { name: "Hibernate", level: 72 },
    ],
  },
  {
    category: "Tools & Version Control",
    skills: [
      { name: "Git & GitHub", level: 78 },
      { name: "Maven", level: 65 },
      { name: "Postman", level: 70 },
      { name: "Eclipse / IntelliJ IDEA", level: 75 },
      { name: "Cisco Packet Tracer", level: 65 },
    ],
  },
  {
    category: "ML / AI",
    skills: [
      { name: "Scikit-learn", level: 65 },
      { name: "NLP (TF-IDF, Tokenization)", level: 65 },
      { name: "Content-based Filtering", level: 65 },
    ],
  },
  {
    category: "Cloud",
    skills: [
      // PLACEHOLDER: resume lists cloud only as "currently strengthening" — no specific
      // cloud platform or certification is named yet.
      { name: "Cloud fundamentals (in progress)", level: 30 },
    ],
  },
];

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  techStack: string[];
  overview: string;
  features: string[];
  challenges: string; // PLACEHOLDER content flagged inline where resume gives no detail
  learned: string;
  outcome: string;
  github: string; // PLACEHOLDER links unless a specific repo is named
  demo: string | null;
};

export const projects: Project[] = [
  {
    slug: "smart-complaint-portal",
    title: "Smart Complaint Portal",
    tagline: "Role-based complaint management system with a full Java web stack.",
    techStack: ["Java", "Spring (MVC)", "JSP", "Hibernate", "MySQL"],
    overview:
      "A web-based complaint management system enabling users to register, submit, and track complaints, with role-based login for users and administrators.",
    features: [
      "Backend designed with Spring (MVC) and Hibernate ORM for persistence",
      "Normalized MySQL database mapping complaint, user, and status records",
      "Dynamic JSP views for complaint submission and status tracking",
      "Admin dashboard to review, assign, and resolve complaints",
      "CRUD operations and session-based authentication",
      "Status-workflow logic: Pending → In Progress → Resolved",
    ],
    challenges:
      "PLACEHOLDER: specific technical challenges were not detailed in the resume — add 1-2 concrete obstacles (e.g. session handling, query performance) here.",
    learned:
      "Strengthened practical experience with layered Java web architecture (JSP–Spring–Hibernate–MySQL), directly applicable to enterprise backend development.",
    outcome:
      "Strengthened practical experience with layered Java web architecture, directly applicable to enterprise backend development.",
    github: "https://github.com/Iram4105/smart-complaint-portal", // PLACEHOLDER: confirm exact repo URL
    demo: null,
  },
  {
    slug: "banking-management-system",
    title: "Banking Management System",
    tagline: "Full-featured banking backend with transactional integrity.",
    techStack: ["Java", "SQL / DBMS", "OOP"],
    overview:
      "A full-featured banking backend with CRUD operations, multi-account management, and transaction logging, backed by a normalized relational database.",
    features: [
      "CRUD operations across multiple account types",
      "Multi-account management per customer",
      "Transaction logging with data integrity constraints",
      "Core OOP design patterns (encapsulation, inheritance) for maintainable business logic",
    ],
    challenges:
      "PLACEHOLDER: specific technical challenges were not detailed in the resume — add details on transactional consistency, concurrency, or schema design decisions here.",
    learned:
      "Demonstrates ability to design, implement, and test backend systems with real-world data management and transactional integrity constraints.",
    outcome:
      "Directly applicable to enterprise Java development, showcasing backend design and testing ability under real-world constraints.",
    github: "https://github.com/Iram4105/banking-management-system", // PLACEHOLDER: confirm exact repo URL
    demo: null,
  },
  {
    slug: "film-recommendation-system",
    title: "Film Recommendation System",
    tagline: "Content-based movie recommendation engine.",
    techStack: ["Python", "Scikit-learn", "Machine Learning"],
    overview:
      "A content-based filtering engine that processes real-world movie datasets to generate personalized recommendations.",
    features: [
      "Content-based filtering engine over real-world movie datasets",
      "Collaborative filtering and cosine similarity algorithms",
      "Data preprocessing: normalization and feature extraction on structured datasets",
    ],
    challenges:
      "PLACEHOLDER: specific technical challenges were not detailed in the resume — add details on dataset size, sparsity, or evaluation metrics here.",
    learned:
      "Demonstrated proficiency in data pipeline design, algorithm selection, and performance evaluation.",
    outcome:
      "Demonstrated proficiency in data pipeline design, algorithm selection, and performance evaluation.",
    github: "https://github.com/Iram4105/film-recommendation-system", // PLACEHOLDER: confirm exact repo URL
    demo: null,
  },
  {
    slug: "spam-detection-system",
    title: "Spam Detection System",
    tagline: "NLP-based binary text classifier.",
    techStack: ["Python", "NLP", "Machine Learning"],
    overview:
      "Independently researched and implemented NLP techniques — tokenization and TF-IDF vectorization — to build a binary text classification model.",
    features: [
      "Tokenization and TF-IDF vectorization pipeline",
      "Binary text classification model",
      "Modular, OOP-based codebase",
      "Iterative measurement and improvement of classification accuracy",
    ],
    challenges:
      "PLACEHOLDER: specific technical challenges were not detailed in the resume — add details on feature selection, class imbalance, or accuracy tuning here.",
    learned:
      "Gained practical skills in pattern recognition and supervised learning, reinforcing modular software design habits useful in backend service development.",
    outcome:
      "Gained practical skills in pattern recognition and supervised learning, reinforcing modular software design habits.",
    github: "https://github.com/Iram4105/spam-detection-system", // PLACEHOLDER: confirm exact repo URL
    demo: null,
  },
];

// No formal work experience is listed on the resume, so this section is replaced
// with academic / project-based experience per the resume's own framing.
export const experience = [
  {
    title: "Academic Projects",
    period: "2023 – Present",
    description:
      "Independently designed and built a 4-tier Java web application (Smart Complaint Portal) covering the full stack from UI to database.",
  },
  {
    title: "Personal / Independent Projects",
    period: "2023 – Present",
    description:
      "Led multi-phase project coordination for the Banking Management System, managing design, development, and presentation milestones.",
  },
  {
    title: "Open Source Contributions",
    period: "PLACEHOLDER",
    description:
      "PLACEHOLDER: no open-source contributions were listed in the resume — add repositories or pull requests here if applicable.",
  },
  {
    title: "Hackathons",
    period: "PLACEHOLDER",
    description:
      "PLACEHOLDER: no hackathon participation was listed in the resume — add events and outcomes here if applicable.",
  },
];

export const certifications = [
  {
    title: "MongoDB Certified Developer",
    issuer: "MongoDB",
    detail: "Database design, querying, and aggregation pipelines for scalable applications.",
  },
  {
    title: "Cisco Networking Certification",
    issuer: "Cisco",
    detail: "TCP/IP protocols, routing fundamentals, and network troubleshooting using Cisco Packet Tracer.",
  },
];

export const achievements = [
  {
    title: "Strong Academic Record",
    detail: "Maintained a CGPA of 8.61/10 through the 7th semester of B.Tech in a competitive engineering programme.",
  },
  {
    title: "Dual Industry Certifications",
    detail: "Completed two industry certifications (MongoDB, Cisco Networking) alongside full-time academic coursework.",
  },
  {
    title: "Full-Stack Independent Build",
    detail: "Independently designed and built a 4-tier Java web application (Smart Complaint Portal) covering the full stack from UI to database.",
  },
  {
    title: "Project Leadership",
    detail: "Led multi-phase project coordination for the Banking Management System, managing design, development, and presentation milestones.",
  },
];

export const codingProfiles = [
  { name: "GitHub", handle: "Iram4105", url: "https://github.com/Iram4105" },
  { name: "LinkedIn", handle: "iram-61aa30297", url: "https://linkedin.com/in/iram-61aa30297" },
  { name: "LeetCode", handle: "Iram010", url: "https://leetcode.com/u/Iram010/" },
  { name: "GeeksforGeeks", handle: "PLACEHOLDER", url: "https://geeksforgeeks.org/user/PLACEHOLDER" },
];
