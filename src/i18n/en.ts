const translations = {
  navbar: {
    home: "Home",
    about: "About",
    experience: "Experience",
    projects: "Projects",
    skills: "Skills",
    contact: "Contact",
    education: "Education",
  },
  hero: {
    greeting: "Hello, I am",
    name: "Mathis Maximin",
    occupation: "DevSecOps Engineer",
    location: "Grenoble, France",
    btnContact: "Contact Me",
    btnWork: "View My Work",
  },
  about: {
    title: "About Me",
    paragraph1:
      "Always passionate about new technologies, looking for a permanent position as a DevOps or FullStack developer.",
    paragraph2:
      "Naturally sociable, I enjoy human interaction. Curious by nature, I seek to challenge myself by discovering new things to perfect my knowledge.",
    socialConnect: "Connect with me:",
    email: "mathis@simats.dev",
    phone: "+33 6 34 67 58 38",
    github: "@mathis-maximin",
  },
  experience: {
    title: "Work Experience",
    job1: {
      title: "Project Manager",
      company: "City of Saint-Martin-d'Hères",
      period: "Mar 2025 - Present",
      description:
        "Project manager for the city of Saint-Martin-d'Hères, I have the mission to manage existing and new projects of the city related to IT.",
    },
    job2: {
      title: "FullStack Developer",
      company: "Kenko",
      period: "Sept 2022 - Aug 2024",
      description:
        "Design and implementation of Kenko's mobile and web solution in React (JS and Native). Migration of the mobile application to Expo Managed to facilitate the development of new features, creation of a CI/CD pipeline with Fastlane then directly on EAS, resolution of run tickets (production version).",
    },
    job3: {
      title: "System Engineer / FullStack middle-office",
      company: "Malakoff Humanis",
      period: "Mar 2022 - Aug 2022",
      description:
        "Design of a platform to track all consumption of internal APIs at Malakoff Humanis and transcription of information on Grafana and Elastic Search graphs.",
    },
    job4: {
      title: "FullStack Developer / DevOps",
      company: "Academic Projects",
      period: "",
      description: "",
    },
  },
  projects: {
    title: "Projects",
    viewProject: "View Project",
    project1: {
      title: "MyContainer",
      description:
        "Creation of a platform allowing students to host IT projects of first and second year students (HTML/CSS/JS, PHP-MySQL, WPF-C#, ANGULAR-JEE) via Docker containers orchestrated via Kubernetes, all hosted on Azure.",
      technologies: ["Docker", "Azure", "Kubernetes"],
      period: "Mar 2021 - Jul 2021",
    },
    project2: {
      title: "System on Demand",
      description:
        "Provide a complete and automatic solution to install and configure the operating system of your choice (Windows, Debian, Raspberry) via a local and online PXE server. Also provide documentation for each operating system for both the user and system administrator.",
      technologies: ["PXE", "Windows", "Debian", "Raspberry"],
      period: "Sept 2020 - Jan 2020",
    },
  },
  education: {
    title: "Education",
    education1: {
      title: "INFORMATION SYSTEMS EXPERT",
      school: "ESIEA - AGEN",
      degree: "Master's Degree",
      period: "Diploma obtained in 2024",
      specialization: "DevOps/Fullstack",
    },
  },
  skills: {
    title: "Technical Skills",
    frontend: "Frontend",
    backend: "Backend",
    tools: "Tools & Cloud",
    human: "Soft Skills",
    programming: "Programming Languages",
    programmingSkills: [
      "HTML / CSS (Tailwind, Material)",
      "Javascript / TypeScript",
      "Php",
      "Sql",
      "Bash",
      "Docker/Kubernetes",
      "Python",
      "Dart (Flutter)",
      "React (Native, Web)",
      "Google Cloud Infrastructure (Firebase)",
      "Azure",
      "Pipeline CI/CD",
      "Terraform/Ansible",
      "Network knowledge (Cisco)",
    ],
    humanSkills: [
      "Teamwork",
      "Communication",
      "Creativity",
      "Initiative",
      "Able to handle projects end-to-end (resolution of Run tickets, definition and implementation of features)",
    ],
  },
  contact: {
    title: "Get In Touch",
    email: "Email :",
    phone: "Phone: +33 6 34 67 58 38",
    github: "GitHub: @mathis-maximin",
    linkedin: "LinkedIn",
    name: "Name",
    subject: "Subject",
    message: "Message",
    sending: "Sending...",
    send: "Send Message",
    success:
      "Your message has been sent successfully! I'll get back to you soon.",
    error: "Something went wrong. Please try again later.",
    availableFor: "Available For",
    fullTime: "Full-time roles",
    freelance: "Freelance projects",
    remote: "Remote work",
    consultations: "Consultations",
    quickLinks: "Quick Links",
    madeWith: "Made with",
    and: "and",
  },
  footer: {
    copyright: "© 2025 Mathis Maximin. All rights reserved.",
    quickLinks: "Quick Links",
    madeWith: "Made with",
    and: "and",
  },
  easterEgg: {
    title: "Congratulations, you found the easter egg!",
    score: "Score",
    timeLeft: "Time left",
    finalScore: "Final score",
    playAgain: "Play again",
    close: "Close",
    exit: "Exit game",
    instructions:
      "Click on the dark green squares with the mole to earn points!",
  },
};

export default translations;
