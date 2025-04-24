const translations = {
  navbar: {
    home: "Accueil",
    about: "À Propos",
    experience: "Expérience",
    projects: "Projets",
    skills: "Compétences",
    contact: "Contact",
    education: "Formation",
  },
  hero: {
    greeting: "Bonjour, je suis",
    name: "Mathis Maximin",
    occupation: "Expert DevSecOps & FullStack",
    location: "Grenoble, France",
    btnContact: "Me Contacter",
    btnWork: "Voir Mes Travaux",
  },
  about: {
    title: "À Propos de Moi",
    paragraph1:
      "Depuis toujours passionné par les nouvelles technologies, à la recherche d'un CDI en tant que DevOps ou bien FullStack.",
    paragraph2:
      "Sociable de nature j'aime le contact humain. Curieux je cherche à me challenger en découvrant de nouvelles choses afin de parfaire ma culture.",
    socialConnect: "Connectez-vous avec moi:",
    email: "mathis@simats.dev",
    phone: "+33 6 34 67 58 38",
    github: "@mathis-maximin",
  },
  experience: {
    title: "Expérience Professionnelle",
    job1: {
      title: "Chef de projet",
      company: " Ville de Saint-Martin-d'Hères",
      period: "Mars 2025 - Aujourd'hui",
      description:
        "Chef de projet pour la ville de Saint-Martin-d'Hères, j'ai pour mission de gérer les projets existants et nouveauxde la ville en lien avec l'informatique.",
    },
    job2: {
      title: "Développeur FullStack",
      company: "Kenko",
      period: "Sept 2022 - Août 2024",
      description:
        "Conception et mise en application de la solution mobile et web de Kenko en React (Js et Native). Migration de l'application mobile vers Expo Managed afin de faciliter le développement de nouvelles fonctionnalités, création d'un pipeline CI/CD avec Fastlane puis directement sur EAS, résolution des tickets de run (version en production).",
    },
    job3: {
      title: "Ingénieur Système / FullStack middle-office",
      company: "Malakoff Humanis",
      period: "Mars 2022 - Août 2022",
      description:
        "Conception d'une plateforme permettant de recenser toutes les consommations des API internes de Malakoff Humanis et retranscription des informations sur des graphiques Grafana et Elastic Search.",
    },
    job4: {
      title: "Développeur FullStack / DevOps",
      company: "Projets Académiques",
      period: "",
      description: "",
    },
  },
  projects: {
    title: "Projets",
    viewProject: "Voir le Projet",
    project1: {
      title: "MyContainer",
      description:
        "Création d'une plateforme permettant aux étudiants d'héberger les projets informatiques des étudiants de première et deuxième année (HTML/CSS/JS, PHP-MySQL, WPF-C#, ANGULAR-JEE) via des conteneurs Docker orchestrés via Kubernetes le tout hébergé sur Azure.",
      technologies: ["Docker", "Azure", "Kubernetes"],
      period: "Mars 2021 - Juillet 2021",
    },
    project2: {
      title: "System on Demand",
      description:
        "Fournir une solution complète et automatique pour installer et configurer le système d'exploitation de son choix (Windows, Debian, Raspberry) via un serveur PXE local et en ligne. Mais aussi fournir une documentation pour chaque système d'exploitation pour l'utilisateur mais aussi l'administrateur du système.",
      technologies: ["PXE", "Windows", "Debian", "Raspberry"],
      period: "Septembre 2020 - Janvier 2020",
    },
  },
  education: {
    title: "Formation",
    education1: {
      title: "EXPERT EN SYSTÈME D'INFORMATION",
      school: "ESIEA - AGEN",
      degree: "Bac + 5",
      period: "Diplôme obtenu en 2024",
      specialization: "DevOps/Fullstack",
    },
  },
  skills: {
    title: "Compétences Techniques",
    frontend: "Frontend",
    backend: "Backend",
    tools: "Outils & Cloud",
    human: "Compétences humaines",
    programming: "Langages de programmation",
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
      "Connaissance en réseaux (Cisco)",
    ],
    humanSkills: [
      "Travail en équipe",
      "Communication",
      "Créativité",
      "Prise d'initiative",
      "Capable de prendre un sujet de bout en bout (résolution de tickets de Run, définition et réalisations de features)",
    ],
  },
  contact: {
    title: "Entrer en Contact",
    email: "Email :",
    phone: "Téléphone: +33 6 34 67 58 38",
    github: "GitHub: @mathis-maximin",
    linkedin: "LinkedIn",
    name: "Nom",
    subject: "Sujet",
    message: "Message",
    sending: "Envoi en cours...",
    send: "Envoyer le message",
    success:
      "Votre message a été envoyé avec succès! Je reviendrai vers vous bientôt.",
    error: "Une erreur s'est produite. Veuillez réessayer plus tard.",
    availableFor: "Disponible pour",
    fullTime: "Postes à temps plein",
    freelance: "Projets freelance",
    remote: "Travail à distance",
    consultations: "Consultations",
    quickLinks: "Liens Rapides",
    madeWith: "Fait avec",
    and: "et",
  },
  footer: {
    copyright: "© 2025 Mathis Maximin. Tous droits réservés.",
    quickLinks: "Liens Rapides",
    madeWith: "Fait avec",
    and: "et",
  },
  easterEgg: {
    title: "Bravo, vous avez trouvé l'easter egg !",
    score: "Score",
    timeLeft: "Temps restant",
    finalScore: "Score final",
    playAgain: "Rejouer",
    close: "Fermer",
    exit: "Quitter le jeu",
    instructions:
      "Cliquez sur les cases vertes foncées avec la taupe pour gagner des points !",
  },
};

export default translations;
