export type Lang = "fr";

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  bullets: string[];
  stack: string[];
}

export interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
  highlight: string;
  icon: string;
  link?: string;
  linkLabel?: string;
}

export interface SkillGroup {
  label: string;
  icon: string;
  items: string[];
}

interface Content {
  nav: { about: string; experience: string; projects: string; skills: string; contact: string };
  hero: {
    roles: string[];
    name: string;
    tagline: string;
    intro: string;
    location: string;
    ctaContact: string;
    ctaWork: string;
    available: string;
  };
  about: {
    eyebrow: string;
    title: string;
    body: string[];
    stats: { value: string; label: string }[];
  };
  experience: { eyebrow: string; title: string; items: ExperienceItem[]; current: string };
  projects: { eyebrow: string; title: string; subtitle: string; items: ProjectItem[] };
  skills: { eyebrow: string; title: string; groups: SkillGroup[]; certsLabel: string; certs: string[] };
  contact: {
    eyebrow: string;
    title: string;
    body: string;
    locationLabel: string;
    locationValue: string;
    languages: string;
    languagesList: string;
    form: {
      name: string;
      email: string;
      message: string;
      namePlaceholder: string;
      emailPlaceholder: string;
      messagePlaceholder: string;
      submit: string;
    };
  };
  footer: { rights: string; built: string };
}

const fr: Content = {
  nav: {
    about: "À propos",
    experience: "Expériences",
    projects: "Réalisations",
    skills: "Compétences",
    contact: "Contact",
  },
  hero: {
    roles: [
      "Développeur Full-Stack",
      "TypeScript / Node.js",
      "DevSecOps",
      "React / React Native",
    ],
    name: "Mathis Maximin",
    tagline: "Je conçois des plateformes SaaS robustes et sécurisées.",
    intro:
      "Développeur full-stack TypeScript/Node.js, à l'aise du front au back, avec une vraie sensibilité sécurité et infrastructure. J'aime m'investir dans des projets à fort impact dès leur phase de construction.",
    location: "Grenoble, France",
    ctaContact: "Me contacter",
    ctaWork: "Voir mon parcours",
    available: "Disponible pour de nouveaux projets",
  },
  about: {
    eyebrow: "À propos",
    title: "Dev full-stack avec une sensibilité Sec & Ops",
    body: [
      "Diplômé d'un parcours niveau 7 « Expert Cloud Dev/Sec/Ops » à l'ESIEA, je combine le développement applicatif et une solide culture sécurité et infrastructure (CCNA CyberOps, architecture hexagonale, CI/CD containerisée).",
      "À l'aise aussi bien côté front (React, Next.js, Tailwind) que back (Node.js, API REST/POSTGRESQL/NoSQL), j'ai déjà lancé des plateformes en production touchant des milliers d'utilisateurs.",
    ],
    stats: [
      { value: "4", label: "ans d'expérience" },
      { value: "Niveau 7", label: "Expert Cloud Dev/Sec/Ops" },
      { value: "Milliers", label: "d'utilisateurs en prod" },
      { value: "CyberOps", label: "certifié CCNA" },
    ],
  },
  experience: {
    eyebrow: "Parcours",
    title: "Expériences professionnelles",
    current: "En cours",
    items: [
      {
        role: "Chef de projet IT",
        company: "Ville de Saint-Martin-d'Hères (DOSI)",
        location: "Saint-Martin-d'Hères",
        period: "Mars 2025 — Aujourd'hui",
        current: true,
        bullets: [
          "Gestion de projets IT pour la collectivité : rédaction de cahiers des charges et de CCTP.",
          "Maintien en condition opérationnelle et sécurisation des logiciels et systèmes.",
          "Résolution d'incidents d'infrastructure (serveurs, postes, périphériques, réseaux).",
          "Gestion des relations fournisseurs et suivi des déploiements logiciels.",
        ],
        stack: ["Gestion de projet", "Infrastructure", "Sécurité", "ITIL"],
      },
      {
        role: "Développeur Full-Stack",
        company: "Cleo Care",
        location: "Distanciel",
        period: "Mai 2025 — Aujourd'hui",
        current: true,
        bullets: [
          "Développement de l'application mobile React Native / Expo (atomic design, architecture hexagonale, Tailwind).",
          "Back office Node.js, infrastructure Firebase/Firestore.",
          "Rédaction de la documentation technique du projet.",
        ],
        stack: ["React Native", "Expo", "Node.js", "Firebase", "Firestore"],
      },
      {
        role: "Ingénieur Full Stack",
        company: "Kenko",
        location: "Paris",
        period: "Sept 2022 — Août 2024",
        bullets: [
          "Conception et développement de la solution Kenko pour les plateformes Web et mobile (React / React Native, Node.js, TypeScript).",
          "Mise en place d'un pipeline CI/CD automatisant le build et le déploiement de l'app mobile sur l'App Store et le Play Store.",
          "Optimisation des processus de déploiement via des scripts pour gagner en efficacité et fiabilité.",
          "Développement de fonctionnalités backend sur Google Cloud Platform (GCP) avec Firebase Cloud Functions.",
          "Création des maquettes et prototypes de l'application mobile pour une expérience utilisateur optimale.",
        ],
        stack: ["React Native", "Node.js", "TypeScript", "GCP", "Firebase", "CI/CD"],
      },
      {
        role: "Stagiaire — Middle Office",
        company: "Malakoff Humanis",
        location: "Paris",
        period: "Mars 2022 — Août 2022",
        bullets: [
          "Développement d'un projet de monitoring des applications du Middle Office avec la suite ELK et Grafana : tableaux de bord dynamiques et alertes sur seuils.",
          "Création d'une plateforme React connectée à l'Active Directory : visualisation des API consommables selon le rôle et l'environnement (test / production), avec documentation associée.",
        ],
        stack: ["React", "Elastic Stack (ELK)", "Grafana", "Active Directory"],
      },
      {
        role: "Expert en Système d'Information (Niveau 7)",
        company: "ESIEA",
        location: "Nîmes · Paris",
        period: "Sept 2019 — Juil 2024",
        bullets: [
          "Parcours Expert Cloud Dev/Sec/Ops orienté infrastructure cloud, sécurité des systèmes et opérations.",
          "Projets concrets réalisés en entreprise tout au long de la formation.",
        ],
        stack: ["Cloud", "Sécurité", "Réseau", "DevOps"],
      },
    ],
  },
  projects: {
    eyebrow: "Réalisations",
    title: "Projets phares",
    subtitle: "Des plateformes pensées pour la production et l'échelle.",
    items: [
      {
        title: "Kenko",
        description:
          "Mutuelle santé d'entreprise 100% digitalisée : des packs de garanties modulables (optique, dentaire, médecine) que chaque salarié compose lui-même, sans jargon ni paperasse. Les économies réalisées financent des services de bien-être personnalisés.",
        tags: ["Mutuelle santé", "Web & mobile", "B2B"],
        highlight: "Couverture santé modulable, zéro paperasse",
        icon: "fa-heart-pulse",
        link: "https://kenko.fr",
        linkLabel: "kenko.fr",
      },
      {
        title: "Cleo Care",
        description:
          "Votre espace beauté personnel : créez vos routines de soin sur mesure, scannez vos cosmétiques pour en décrypter les bienfaits, suivez les dates de péremption et achetez vos produits favoris directement dans l'app. Fini les produits oubliés ou mal adaptés.",
        tags: ["Beauté & soin", "Scan produits", "Routines", "iOS & Android"],
        highlight: "Routines, scan cosmétique & suivi péremption",
        icon: "fa-wand-magic-sparkles",
        link: "https://cleocare.fr",
        linkLabel: "cleocare.fr",
      },
      {
        title: "Plateforme catalogue d'API (Malakoff Humanis)",
        description:
          "Plateforme React connectée à l'Active Directory permettant aux équipes de visualiser les API consommables selon leur rôle et l'environnement (test / production), avec documentation par API.",
        tags: ["React", "Active Directory", "API", "Documentation"],
        highlight: "Accès aux API selon le rôle & l'environnement",
        icon: "fa-sitemap",
      },
      {
        title: "Monitoring applicatif ELK + Grafana",
        description:
          "Solution de supervision des applications du Middle Office avec la suite Elastic (ELK) et Grafana : tableaux de bord dynamiques et alertes déclenchées sur seuils prédéfinis.",
        tags: ["Elastic Stack (ELK)", "Grafana", "Monitoring", "Alerting"],
        highlight: "Dashboards & alertes en temps réel",
        icon: "fa-chart-line",
      },
      {
        title: "Buy&Bye",
        description:
          "Application mobile de mise en relation entre particuliers et professionnels de proximité — commerçants, restaurateurs — pour commander et se faire livrer autour de soi. Paiement intégré (Stripe Marketplace), gestion des commandes et du stock côté commerçant.",
        tags: ["Flutter", "Marketplace", "Géolocalisation", "Stripe"],
        highlight: "Commande & livraison de proximité",
        icon: "fa-store",
      },
    ],
  },
  skills: {
    eyebrow: "Stack",
    title: "Compétences techniques",
    certsLabel: "Certifications",
    certs: ["CCNA 1/2/3", "CCNA CyberOps", "ITIL", "TOEIC 870", "Projet Voltaire 641"],
    groups: [
      {
        label: "Front-end",
        icon: "fa-laptop-code",
        items: ["React", "Next.js", "React Native", "TSX", "Tailwind CSS"],
      },
      {
        label: "Back-end",
        icon: "fa-server",
        items: ["Node.js", "Express", "API REST", "PostgreSQL", "NoSQL"],
      },
      {
        label: "Langages",
        icon: "fa-code",
        items: ["TypeScript", "JavaScript", "Python", "Bash"],
      },
      {
        label: "Bases de données",
        icon: "fa-database",
        items: ["PostgreSQL", "MongoDB", "Firebase", "Firestore"],
      },
      {
        label: "CI/CD & Infra",
        icon: "fa-cubes",
        items: ["Docker", "Kubernetes", "GitHub Actions", "GCP", "Linux"],
      },
      {
        label: "Sécurité & Auth",
        icon: "fa-shield-halved",
        items: ["OpenID Connect", "Sessions / SSO", "Active Directory", "Durcissement"],
      },
      {
        label: "Observabilité",
        icon: "fa-chart-line",
        items: ["Elastic Stack (ELK)", "Grafana", "Prometheus"],
      },
      {
        label: "Tests & qualité",
        icon: "fa-vial-circle-check",
        items: ["Jest", "Playwright", "Puppeteer"],
      },
      {
        label: "Outils & méthodes",
        icon: "fa-diagram-project",
        items: ["Git", "GitLab", "Jira", "Confluence", "Scrum", "Kanban"],
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Travaillons ensemble",
    body: "Un projet à fort impact, une opportunité full-stack ou DevSecOps ? Laissez-moi un message, je réponds rapidement.",
    locationLabel: "Localisation",
    locationValue: "Grenoble, France",
    languages: "Langues",
    languagesList: "Français · Anglais (TOEIC 870) · Espagnol",
    form: {
      name: "Nom",
      email: "Email",
      message: "Message",
      namePlaceholder: "Votre nom",
      emailPlaceholder: "vous@exemple.com",
      messagePlaceholder: "Parlez-moi de votre projet…",
      submit: "Envoyer le message",
    },
  },
  footer: {
    rights: "Tous droits réservés.",
    built: "Conçu & développé avec React, Vite & Tailwind.",
  },
};

export const content: Record<Lang, Content> = { fr };
export type { Content };
