import "./footer.css";
import { DataContext } from "../../context/DataContext";
import { useContext } from "react";

function Footer() {
  const { content, theme } = useContext(DataContext);
  /*
  const footerInfo = {
    email: "👉 omerfaruk2441@gmail.com",
    githubLink: "https://github.com/OmerFarukYilmazz",
    linkedinLink: "https://www.linkedin.com/in/omerfarukyilmazz/",
    personalBlogLink: "#",
    main: "Let’s work together on your next product.",
  };
  */

  return (
    <div
      className={`footer-container ${
        theme === "dark" ? "footer-container-dark" : ""
      }`}
    >
      <h2
        className={`footer-title ${
          theme === "dark" ? "footer-container-dark" : ""
        }`}
      >
        {content.footerInfo.main}
      </h2>
      <div className="contact-info">
        <div
          className={`footer-email ${
            theme === "dark" ? "email-footer-dark" : ""
          }`}
        >
          <a href={`mailto:${content.footerInfo.email.replace("👉 ", "")}`}>
            {content.footerInfo.email}
          </a>
        </div>
        <div className={`links ${theme === "dark" ? "links-dark" : ""}`}>
          <a href={content.footerInfo.personalBlogLink}>
            {content.footerInfo.personalBlog}
          </a>
          <a href={content.footerInfo.githubLink}>Github</a>
          <a href={content.footerInfo.linkedinLink}>Linkedin</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
