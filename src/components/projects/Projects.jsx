import "./projects.css";
/*
import bookStoreImg from "../../assets/bookStore.png";
import contactsApp from "../../assets/contactsApp.png";
import pizza from "../../assets/pizza.jpg";
*/

import { DataContext } from "../../context/DataContext";
import { useContext } from "react";

function Projects() {
  /*
  const projects = "Projects";
  const projectsData = [
    {
      id: 1,
      title: "Contact-App",
      imageUrl: contactsApp,
      description:
        "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
      technologies: ["React", "Redux", "Axios"],
      githubLink: "",
      viewSiteLink: "",
    },
    {
      id: 2,
      title: "Pizza-Project",
      imageUrl: pizza,

      description:
        "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
      technologies: ["React", "Redux", "Axios"],
      githubLink: "",
      viewSiteLink: "",
    },
    {
      id: 3,
      title: "Book-Store",
      imageUrl: bookStoreImg,

      description:
        "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
      technologies: ["React", "Redux", "Axios"],
      githubLink: "",
      viewSiteLink: "",
    },
  ];
  */

  const { content, theme } = useContext(DataContext);
  return (
    <div className={`projects ${theme === "dark" ? "projects-dark" : ""}`}>
      <h1
        className={`projects-header-h1 ${
          theme === "dark" ? "projects-header-h1-dark" : ""
        }`}
      >
        {content.projects}
      </h1>
      <div className="projects-container">
        {content.projectsData.map((project, index) => (
          <div key={index} className="project">
            <img src={project.imageUrl} className="project-img" alt="Project" />
            <h3
              className={`project-header-h3 ${
                theme === "dark" ? "project-header-h3-dark" : ""
              }`}
            >
              {project.title}
            </h3>
            <p
              className={`project-info-p ${
                theme === "dark" ? "project-info-p-dark" : ""
              }`}
            >
              {project.description}
            </p>
            <div className="project-button">
              {project.technologies.map((tech, index) => (
                <button
                  key={index}
                  className={`project-button-info ${
                    theme === "dark" ? "project-button-info-dark" : ""
                  }`}
                >
                  {tech}
                </button>
              ))}
            </div>
            <div
              className={`project-routing ${
                theme === "dark" ? "project-routing-dark" : ""
              }`}
            >
              <a href={project.githubLink} target="_blank">
                GitHub
              </a>
              <a href={project.viewSiteLink} target="_blank">
                View Site
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Projects;
