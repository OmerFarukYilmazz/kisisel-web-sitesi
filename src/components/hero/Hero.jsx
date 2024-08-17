import GithubLogo from "../../assets/github.svg";
import Linkedin from "../../assets/linkedin-in.svg";
import heroImg from "../../assets/son.jpg";
import "./hero.css";

import { DataContext } from "../../context/DataContext";
import { useContext } from "react";

function Hero() {
  /*
  const aboutMe = {
    section: "About Me",
    name: "ÖMER FARUK YILMAZ",
    bdaytitle: "Birthday",
    bday: "03.09.1991",
    cityTitle: "City",
    city: "ANTALYA",
    educationTitle: "Education",
    education: {
      uni: "Esogü Uni/ Civil Engineer",
      type: "Bachelor's degree",
      year: "2017",
    },
    roleTitle: "Preferred Role",
    role: "Full-Stack Java Developer",
    aboutMe: [
      "I worked as a Civil Engineer for 3 years, then I changed my carreer for making dream real now I'm a full stack developer.",
      "",
    ],
  };
  const title = "Creative Thinker, Minimalism Lover";
  const description = "Hello, I'm Omer";
  const navigationLinks = ["Skills", "Projects", "Hire Me"];
  */
  const { content, theme } = useContext(DataContext);

  return (
    <div
      className={`hero-container ${
        theme === "dark" ? "hero-container-dark" : ""
      }`}
    >
      <div className="left-section">
        <p className={`hero-name ${theme === "dark" ? "hero-name-dark" : ""}`}>
          {" "}
          {content.aboutMe.name}
        </p>
        <h1 className={`hero-h1 ${theme === "dark" ? "hero-h1-dark" : ""}`}>
          {" "}
          {content.title}{" "}
        </h1>
        <p
          className={`left-section-info ${
            theme === "dark" ? "left-section-info-dark" : ""
          }`}
        >
          {content.description}
        </p>
        <div className="button-container-hero">
          <a href="">
            <button
              className={`hire-button ${
                theme === "dark" ? "hire-button-dark" : ""
              }`}
            >
              {content.headerData.navigationLinks[2]}
            </button>
          </a>
          <a href="">
            <button
              className={`github-button ${
                theme === "dark" ? "github-button-dark" : ""
              }`}
            >
              <img src={GithubLogo} alt="Github Logo" />
              Github
            </button>
          </a>
          <a href="">
            <button
              className={`linkedin-button ${
                theme === "dark" ? "linkedIn-button-dark" : ""
              }`}
            >
              <img src={Linkedin} alt="Linkedin Logo" />
              Linkedin
            </button>
          </a>
        </div>
      </div>
      <div className="right-section">
        <img
          className={`hero-photo ${theme === "dark" ? "hero-photo-dark" : ""}`}
          src={heroImg}
          alt=""
        />
      </div>
    </div>
  );
}

export default Hero;
