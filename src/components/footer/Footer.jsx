import "./footer.css";
import { DataContext } from "../../context/DataContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

function Footer() {
  const { content, theme } = useContext(DataContext);
  // first method props + const value
  // second method context + data
  // third method Api + useState
  /* 
  const footerInfo = {
    email: "👉 omerfaruk2441@gmail.com",
    githubLink: "https://github.com/OmerFarukYilmazz",
    linkedinLink: "https://www.linkedin.com/in/omerfarukyilmazz/",
    personalBlogLink: "#",
    main: "Let’s work together on your next product.",
  };
  */
  const [footerInfo, SetFooterInfo] = useState([]);

  useEffect(() => {
    axios
      .get("https://66c25ff7f83fffcb587bcc8b.mockapi.io/footer")
      .then((response) => {
        // handle success
        console.log(response);
        SetFooterInfo(response.data);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }, []); // Boş dizi, useEffect'in sadece bileşen yüklendiğinde çalışmasını sağlar
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
