import "./header.css";
import { DataContext } from "../../context/DataContext";
import { useContext } from "react";

function Header() {
  /*
  const navigationLinks = ["Skills", "Projects", "Hire Me"];
  const logoText = "ÖFY";
  */

  const { content, theme } = useContext(DataContext);
  return (
    <nav
      className={`header-container ${
        theme === "dark" ? "header-container-dark" : ""
      }`}
    >
      <div className="costum-container">
        <a>{content.headerData.logoText}</a>
      </div>
      <div className="navigation-bar">
        {content.headerData.navigationLinks.map((link, index) => (
          <a key={index} href={`#${link.toLowerCase()}`}>
            {link}
          </a>
        ))}
      </div>
    </nav>
  );
}
export default Header;
