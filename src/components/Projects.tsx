import React, { useEffect, useState } from "react";
import { translate } from "../i18n";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoLink: string;
  longDescription?: string;
  features?: string[];
  challenges?: string[];
  screenshots?: string[];
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const title = translate("projects.title");
  const viewProject = translate("projects.viewProject");
  const closeModalText = translate("projects.closeModal") || "Fermer";
  const featuresTitle =
    translate("projects.featuresTitle") || "Fonctionnalités";
  const challengesTitle = translate("projects.challengesTitle") || "Défis";
  const technologiesTitle =
    translate("projects.technologiesTitle") || "Technologies";
  const visitProjectText =
    translate("projects.visitProject") || "Visiter le projet";

  const projects: Project[] = [
    {
      id: "project1",
      title: translate("projects.project1.title"),
      description: translate("projects.project1.description"),
      image:
        "https://img.freepik.com/free-photo/closeup-computer-screen-with-screenshot-app-office-desk_637285-7299.jpg",
      technologies: ["React", "TypeScript", "Node.js", "AWS"],
      demoLink: "https://example.com/project1",
      longDescription:
        translate("projects.project1.longDescription") ||
        "Description détaillée du projet 1 avec toutes les informations importantes sur le développement, l'implémentation et les résultats obtenus.",
      features: [
        translate("projects.project1.feature1") ||
          "Interface utilisateur intuitive",
        translate("projects.project1.feature2") || "Authentification sécurisée",
        translate("projects.project1.feature3") ||
          "Tableau de bord personnalisable",
      ],
      challenges: [
        translate("projects.project1.challenge1") ||
          "Optimisation des performances",
        translate("projects.project1.challenge2") ||
          "Intégration de multiples API",
      ],
      screenshots: [
        "https://img.freepik.com/free-photo/closeup-computer-screen-with-screenshot-app-office-desk_637285-7299.jpg",
        "https://img.freepik.com/free-photo/closeup-computer-screen-with-screenshot-app-office-desk_637285-7299.jpg",
      ],
    },
    {
      id: "project2",
      title: translate("projects.project2.title"),
      description: translate("projects.project2.description"),
      image:
        "https://img.freepik.com/free-photo/online-shopping-concept-shopping-cart-smartphone-screen_93675-56082.jpg",
      technologies: ["Vue.js", "Express", "MongoDB", "Stripe"],
      demoLink: "https://example.com/project2",
      longDescription:
        translate("projects.project2.longDescription") ||
        "Description détaillée du projet 2 qui présente toutes les fonctionnalités principales et le processus de développement.",
      features: [
        translate("projects.project2.feature1") || "Panier d'achat interactif",
        translate("projects.project2.feature2") ||
          "Passerelle de paiement sécurisée",
        translate("projects.project2.feature3") ||
          "Suivi des commandes en temps réel",
      ],
      challenges: [
        translate("projects.project2.challenge1") ||
          "Gestion des sessions utilisateur",
        translate("projects.project2.challenge2") ||
          "Optimisation des requêtes de base de données",
      ],
      screenshots: [
        "https://img.freepik.com/free-photo/online-shopping-concept-shopping-cart-smartphone-screen_93675-56082.jpg",
        "https://img.freepik.com/free-photo/online-shopping-concept-shopping-cart-smartphone-screen_93675-56082.jpg",
      ],
    },
  ];

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      setModalOpen(true);
    }, 50);
  };

  const closeProjectModal = () => {
    setModalOpen(false);
    document.body.style.overflow = "auto";
    setTimeout(() => setSelectedProject(null), 700);
  };

  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.2 }
    );

    const projectItems = document.querySelectorAll(".project-item");
    projectItems.forEach((item) => {
      observer.observe(item);
    });

    return () => {
      projectItems.forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, []);

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && modalOpen) {
        closeProjectModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalOpen]);

  return (
    <>
      <section id="projects" className="py-20 bg-white">
        <div className="section-container">
          <h2 className="section-title" data-i18n="projects.title">
            {title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="project-item opacity-0 card group relative overflow-hidden cursor-pointer"
                style={{ transitionDelay: `${index * 150}ms` }}
                onClick={() => openProjectModal(project)}
              >
                {/* Project image */}
                <div className="h-60 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Project details */}
                <div className="p-6">
                  <h3
                    className="text-xl font-bold text-text mb-2"
                    data-i18n={`projects.${project.id}.title`}
                  >
                    {project.title}
                  </h3>

                  <p
                    className="text-light-text mb-4"
                    data-i18n={`projects.${project.id}.description`}
                  >
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-100 text-primary text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View details button instead of direct link */}
                  <button
                    className="inline-flex items-center text-primary font-medium hover:text-secondary transition-colors duration-300"
                    onClick={(e) => {
                      e.stopPropagation();
                      openProjectModal(project);
                    }}
                  >
                    {viewProject}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details Modal */}
      {selectedProject && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${
            modalOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          style={{
            transition: "opacity 500ms",
            transitionDelay: modalOpen ? "0ms" : "200ms",
            transitionTimingFunction: modalOpen
              ? "cubic-bezier(0.16, 1, 0.3, 1)"
              : "cubic-bezier(0.7, 0, 0.84, 0)",
          }}
        >
          {/* Modal Backdrop with improved fade-out */}
          <div
            className="absolute inset-0 bg-black"
            style={{
              opacity: modalOpen ? 0.75 : 0,
              transition: "opacity 700ms",
              transitionTimingFunction: modalOpen
                ? "cubic-bezier(0.16, 1, 0.3, 1)"
                : "cubic-bezier(0.7, 0, 0.84, 0)",
            }}
            onClick={closeProjectModal}
          ></div>

          {/* Modal Content with symmetric animation */}
          <div
            className="bg-white rounded-lg shadow-xl max-w-4xl w-full overflow-hidden z-10"
            style={{
              opacity: modalOpen ? 1 : 0,
              transform: modalOpen
                ? "scale(1) translateY(0)"
                : "scale(0.95) translateY(8px)",
              maxHeight: modalOpen ? "90vh" : "0",
              transition: "opacity 500ms, transform 500ms, max-height 500ms",
              transitionTimingFunction: modalOpen
                ? "cubic-bezier(0.16, 1, 0.3, 1)"
                : "cubic-bezier(0.7, 0, 0.84, 0)",
            }}
          >
            <div className="overflow-y-auto max-h-[90vh]">
              {/* Modal Header with Close Button */}
              <div className="flex justify-between items-center border-b border-gray-200 p-6">
                <h3 className="text-2xl font-bold text-text">
                  {selectedProject.title}
                </h3>
                <button
                  onClick={closeProjectModal}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Modal Body with symmetric animation */}
              <div
                className={`p-6 transition-all duration-700 ${
                  modalOpen ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  transitionDelay: modalOpen ? "200ms" : "0ms",
                  transitionTimingFunction: modalOpen
                    ? "cubic-bezier(0.16, 1, 0.3, 1)"
                    : "cubic-bezier(0.7, 0, 0.84, 0)",
                }}
              >
                {/* Project Main Image */}
                <div className="mb-8 rounded-lg overflow-hidden">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-auto"
                  />
                </div>

                {/* Long Description */}
                <div className="mb-8">
                  <p className="text-light-text">
                    {selectedProject.longDescription}
                  </p>
                </div>

                {/* Features */}
                {selectedProject.features &&
                  selectedProject.features.length > 0 && (
                    <div className="mb-8">
                      <h4 className="text-xl font-semibold mb-4">
                        {featuresTitle}
                      </h4>
                      <ul className="list-disc pl-5 space-y-2">
                        {selectedProject.features.map((feature, index) => (
                          <li key={index} className="text-light-text">
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                {/* Challenges */}
                {selectedProject.challenges &&
                  selectedProject.challenges.length > 0 && (
                    <div className="mb-8">
                      <h4 className="text-xl font-semibold mb-4">
                        {challengesTitle}
                      </h4>
                      <ul className="list-disc pl-5 space-y-2">
                        {selectedProject.challenges.map((challenge, index) => (
                          <li key={index} className="text-light-text">
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                {/* Technologies */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold mb-4">
                    {technologiesTitle}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-100 text-primary text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Additional Screenshots */}
                {selectedProject.screenshots &&
                  selectedProject.screenshots.length > 1 && (
                    <div className="mb-8">
                      <h4 className="text-xl font-semibold mb-4">
                        Screenshots
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {selectedProject.screenshots
                          .slice(1)
                          .map((screenshot, index) => (
                            <div
                              key={index}
                              className="rounded-lg overflow-hidden"
                            >
                              <img
                                src={screenshot}
                                alt={`${selectedProject.title} screenshot ${
                                  index + 1
                                }`}
                                className="w-full h-auto"
                              />
                            </div>
                          ))}
                      </div>
                    </div>
                  )}

                {/* Visit Project Link */}
                <div className="mt-8">
                  <a
                    href={selectedProject.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-secondary transition-colors duration-300"
                  >
                    {visitProjectText}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="border-t border-gray-200 p-6 flex justify-end">
                <button
                  onClick={closeProjectModal}
                  className="px-6 py-2 bg-gray-200 text-gray-800 font-medium rounded-lg hover:bg-gray-300 transition-colors duration-300"
                >
                  {closeModalText}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
