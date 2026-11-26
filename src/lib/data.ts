// All content below is sourced directly from Iram's resume.



// Anything not present in the resume is marked with a clear [PLACEHOLDER] value —



// search for "PLACEHOLDER" to find every field that needs a real value before launch.







export const personal = {



  name: "Iram",



  role: "Aspiring Software Engineer",



  roles: [
    "Software Developer",
    "Aspiring Software Engineer",
    "AI/ML Enthusiast",
    "Full-Stack Developer",
    "Graduate Engineer Trainee",
    "Technology Enthusiast",
  ],



  tagline: "Final-year B.Tech CSE student (2027) building practical applications across software development, full-stack engineering, and AI/ML. Actively seeking entry-level technology opportunities and eager to learn, contribute, and grow across teams.",



  email: "iramjavedali@gmail.com",



  phone: "+91 7017541410",



  location: "Sardhana, Meerut, Uttar Pradesh, India",



  linkedin: "https://linkedin.com/in/iram-61aa30297",



  github: "https://github.com/Iram4105",



  leetcode: "https://leetcode.com/u/Iram010/",



  gfg: "https://geeksforgeeks.org/user/PLACEHOLDER", // PLACEHOLDER: GFG profile URL not in resume



  resumeFile: "/resume.pdf",



  siteUrl: "https://iram-portfolio-one.vercel.app", // PLACEHOLDER: replace with real deployed domain



  ogImage: "/og-image.png",



};







export const about = {



  summary: "Final-year B.Tech Computer Science student (2027) and aspiring software engineer with hands-on project and internship training experience in software development, full-stack applications, databases, REST APIs, and AI/ML. Strong foundation in programming, problem-solving, and computer science fundamentals, supported by an 8.61/10 CGPA and 300+ LeetCode problems solved.",



  goal: "Open to entry-level opportunities across Software Development, Full-Stack Development, AI/ML, QA/Testing, Cloud/DevOps, and Graduate Engineer Trainee roles. Flexible about technology stacks, enthusiastic about learning, and ready to contribute wherever programming, analytical thinking, and problem-solving are valued.",



  strengths: [



    {



      title: "Software engineering mindset",



      desc: "Comfortable working across application layers, APIs, databases, programming, and modern development tools.",



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



    { label: "LeetCode Problems Solved", value: "300", suffix: "+" },



    { label: "Academic Projects", value: "4", suffix: "+" },



    { label: "Certifications", value: "5", suffix: "" },



  ],



};







export const education = [



  {



    degree: "B.Tech in Computer Science Engineering",



    institution: "Meerut Institute of Engineering & Technology (MIET), AKTU Lucknow",



    duration: "2023 – 2027",



    detail: "CGPA: 8.61 / 10  •  Currently in 7th Semester (4th Year)",



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
  image: string;




};







export const projects: Project[] = [
  {
    slug: "xai-brain-tumor-detection",
    title: "XAI Brain Tumor Detection System",
    tagline: "Explainable AI pipeline for brain tumor detection and classification from MRI scans.",
    techStack: ["Python", "CNN", "Vision Transformer (ViT)", "Grad-CAM", "SHAP", "LIME"],
    overview: "An ongoing research-oriented system exploring deep learning and Explainable AI techniques for brain tumor detection and multi-class classification using MRI imagery.",
    features: [
      "Two-stage tumor detection and multi-class classification pipeline",
      "Vision Transformer and deep learning experimentation",
      "Grad-CAM, Grad-CAM++, Layer-CAM, Score-CAM, SHAP, and LIME explanations",
      "MRI preprocessing, resizing, normalization, augmentation, and enhancement",
    ],
    challenges: "Designing an interpretable medical-imaging pipeline while keeping preprocessing, classification, and explanation stages clearly separated.",
    learned: "Gained practical experience with computer vision, transfer learning, transformers, model evaluation, and explainability techniques.",
    outcome: "Ongoing research project focused on combining tumor classification with interpretable model explanations.",
    github: "https://github.com/Iram4105",
    demo: null,
    image: "/projects/xai-brain-tumor.svg",
  },
  {
    slug: "trustpay-ai-payment-scam-detection",
    title: "TrustPay AI – Payment Scam Detection",
    tagline: "Explainable AI system for detecting suspicious payment messages and generating risk insights.",
    techStack: ["Python", "TF-IDF", "Logistic Regression", "FastAPI", "Streamlit", "Explainable AI"],
    overview: "An explainable machine-learning application that classifies payment messages, estimates scam risk, and provides human-readable explanations for model decisions.",
    features: [
      "TF-IDF based text representation and Logistic Regression classification",
      "Risk scoring for suspicious payment messages",
      "Token-level explanations and feature importance insights",
      "FastAPI backend with Streamlit interactive interface",
    ],
    challenges: "Balancing classification performance with explanations that are understandable to users and useful for reviewing suspicious messages.",
    learned: "Strengthened skills in NLP, supervised learning, API development, model interpretation, and ML application deployment.",
    outcome: "A working explainable scam-detection application with an API and interactive demonstration interface.",
    github: "https://github.com/Iram4105/TrustPay-AI-Payment-Scam-Detection",
    demo: null,
    image: "/projects/trustpay-ai.svg",
  },
  {
    slug: "smart-complaint-portal",
    title: "Smart Complaint Portal",
    tagline: "Role-based complaint management system with a complete Java web stack.",
    techStack: ["Java", "Spring MVC", "JSP", "Hibernate", "MySQL"],
    overview: "A web-based complaint management system enabling users to register, submit, and track complaints, with role-based access for users and administrators.",
    features: [
      "Spring MVC and Hibernate based application architecture",
      "Normalized MySQL database for users, complaints, and statuses",
      "JSP views for complaint submission and tracking",
      "Admin dashboard for reviewing, assigning, and resolving complaints",
      "Session-based authentication and CRUD workflows",
    ],
    challenges: "Connecting the web layer, business logic, persistence layer, and database while maintaining role-based access and complaint status workflows.",
    learned: "Strengthened practical experience with Java web development, MVC architecture, ORM, databases, authentication, and CRUD operations.",
    outcome: "A complete academic web application demonstrating end-to-end application development.",
    github: "https://github.com/Iram4105/Smart-Complaint-Portal",
    demo: null,
    image: "/projects/smart-complaint-portal.svg",
  },
  {
    slug: "smart-notes-rest-api",
    title: "Smart Notes REST API",
    tagline: "CRUD notes service built with Node.js, Express, and MySQL.",
    techStack: ["Node.js", "Express.js", "MySQL", "REST API", "dotenv"],
    overview: "A beginner-friendly REST API for creating, reading, updating, and deleting notes using structured routes, middleware, and asynchronous MySQL operations.",
    features: [
      "CRUD endpoints for notes",
      "Express.js routing and middleware-based request handling",
      "MySQL integration using mysql2/promise",
      "Environment-based configuration using dotenv",
    ],
    challenges: "Designing clean API routes and handling asynchronous database operations consistently across CRUD workflows.",
    learned: "Improved understanding of REST API design, Express.js, asynchronous JavaScript, SQL integration, and environment configuration.",
    outcome: "A compact REST API demonstrating practical server-side JavaScript and database integration.",
    github: "https://github.com/Iram4105",
    demo: null,
    image: "/projects/smart-notes-api.svg",
  },
  {
    slug: "banking-management-system",
    title: "Banking Management System",
    tagline: "Transactional banking application with account management and transaction logging.",
    techStack: ["Java", "Spring Boot", "JDBC", "SQL", "OOP"],
    overview: "A transactional banking system supporting multi-account management, fund transfers, CRUD workflows, and persistent transaction history using a relational database.",
    features: [
      "Account creation and management",
      "Fund transfer and balance update workflows",
      "Persistent transaction-history retrieval",
      "JDBC-based data access layer",
      "OOP-based modular business logic",
    ],
    challenges: "Maintaining transactional integrity across account updates, transfers, and transaction-history operations.",
    learned: "Strengthened Java, OOP, SQL, JDBC, database design, validation, and transaction-handling skills.",
    outcome: "A backend-oriented banking application demonstrating structured business logic and relational data management.",
    github: "https://github.com/Iram4105/BankManagementSystem",
    demo: null,
    image: "/projects/banking-management.svg",
  },
  {
    slug: "film-recommendation-system",
    title: "Film Recommendation System",
    tagline: "Movie recommendation engine using content and collaborative filtering techniques.",
    techStack: ["Python", "Scikit-learn", "Flask", "TF-IDF", "Streamlit"],
    overview: "A recommendation system that uses TF-IDF, cosine similarity, and a collaborative filtering component to generate personalized movie recommendations.",
    features: [
      "TF-IDF based content representation",
      "Cosine similarity for content-based recommendations",
      "Collaborative filtering with an SVD component",
      "Flask API and Streamlit frontend",
      "TMDB integration for movie information",
    ],
    challenges: "Combining content-based and collaborative signals while preparing structured movie data for recommendation generation.",
    learned: "Gained practical experience in recommender systems, feature engineering, similarity measures, APIs, and ML application interfaces.",
    outcome: "An interactive movie recommendation application combining machine-learning techniques with a web interface.",
    github: "https://github.com/Iram4105/Movie-Recommendation-System",
    demo: null,
    image: "/projects/film-recommendation.svg",
  },
];



// No formal work experience is listed on the resume, so this section is replaced



// with academic / project-based experience per the resume's own framing.



export const experience = [
  {
    title: "Summer Training Intern – Java Full Stack (Project Based Learning)",
    organization: "Meerut Institute of Engineering & Technology (MIET), Meerut",
    period: "June 2026 – July 2026",
    duration: "120 Hours",
    mode: "On-site",
    description:
      "Completed an intensive 120-hour, industry-oriented Java Full Stack internship in a project-based learning format.",
    highlights: [
      "Built the Smart Complaint Portal, a role-based full stack application, using Java, Spring Boot, Spring MVC, Hibernate/JPA, JSP and MySQL.",
      "Validated REST APIs using Postman.",
      "Used Git, GitHub and Maven for version control and builds while following SDLC and Agile practices.",
    ],
  },
];

export const certifications = [
  {
    title: "Wipro Certified in Java",
    issuer: "Wipro TalentNext",
    detail: "Java certification completed through Wipro TalentNext in 2026.",
  },
  {
    title: "MongoDB Certified Developer",
    issuer: "MongoDB",
    detail: "Certification covering MongoDB development concepts.",
  },
  {
    title: "Cisco Networking Certification",
    issuer: "Cisco",
    detail: "Networking certification; practical networking experience includes Cisco Packet Tracer.",
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    issuer: "Oracle",
    detail: "Professional certification in generative AI and Oracle Cloud Infrastructure.",
  },
  {
    title: "HackerRank Software Engineer Intern",
    issuer: "HackerRank",
    detail: "HackerRank Software Engineer Intern certification.",
  },
];

export const trainings = [
  {
    title: "Tech4All CSR Training Program",
    provider: "ICT Academy – Cognizant Foundation",
    period: "October 2026",
    status: "Ongoing",
    detail: "Trainee in the ICT Academy – Cognizant Foundation “Tech4All” CSR Training Program.",
  },
];

export const achievements = [
  {
    title: "300+ LeetCode Problems",
    detail: "Solved 300+ problems on LeetCode across arrays, trees, graphs, binary search, dynamic programming and hashing.",
  },
  {
    title: "Strong Academic Record",
    detail: "Maintained a CGPA of 8.61/10 through the 7th semester of B.Tech.",
  },
  {
    title: "Industry Certifications",
    detail: "Earned certifications in Java through Wipro TalentNext, MongoDB development, Cisco networking, Oracle Cloud Generative AI, and software engineering through HackerRank.",
  },
  {
    title: "Full-Stack Internship Project",
    detail: "Completed a 120-hour Java Full Stack internship at MIET by developing the role-based Smart Complaint Portal.",
  },
  {
    title: "Research Paper Accepted – IEEE ICACECT-2027",
    detail: "Research paper on explainable deep learning for brain tumor MRI analysis accepted for presentation at the First IEEE International Conference on Advancements in Computer Engineering and Communication Technologies (ICACECT-2027).",
  },
];

export const codingProfiles = [



  { name: "GitHub", handle: "Iram4105", url: "https://github.com/Iram4105" },



  { name: "LinkedIn", handle: "iram-61aa30297", url: "https://linkedin.com/in/iram-61aa30297" },



  { name: "LeetCode", handle: "Iram010", url: "https://leetcode.com/u/Iram010/" },



  { name: "GeeksforGeeks", handle: "PLACEHOLDER", url: "https://geeksforgeeks.org/user/PLACEHOLDER" },



];
