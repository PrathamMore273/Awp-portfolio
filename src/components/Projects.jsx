import React from "react";

const Projects = () => {
  const projectData = [
    {
      title: "Amazon Homepage Clone",
      description:
        "A responsive Amazon homepage clone built using HTML, CSS, and JavaScript to replicate the look and feel of the original site.",
      tech: "HTML, CSS, JavaScript",
      link: "https://github.com/PrathamMore273/portfolio.git",
    },
    {
      title: "Personal Portfolio",
      description:
        "A modern and responsive personal portfolio website built using React and Vite. It showcases my professional profile, education, technical skills, and featured projects. The site is fully responsive, well-structured, and deployed using GitHub Pages.",
      tech: "HTML, CSS, JavaScript, React",
      link: "https://github.com/PrathamMore273/portfolio.git",
    },
    {
      title: "News Summarizer",
      description:
        "An AI-powered web app that summarizes news articles using Natural Language Processing (NLP) techniques for quick insights.",
      tech: "Python, Flask, NLP",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-container">
        {projectData.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p className="project-desc">{project.description}</p>
            <p className="project-tech">
              <strong>Tech Used:</strong> {project.tech}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project ↗
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
