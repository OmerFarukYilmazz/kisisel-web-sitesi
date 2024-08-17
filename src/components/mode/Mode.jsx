import "./mode.css";
import { DataContext } from "../../context/DataContext";
import { useContext } from "react";

function Mode(props) {
  //const { language, languageHandler } = props;
  //const theme = "dark";
  const { language, languageHandler, theme, toggleTheme } =
    useContext(DataContext);

  return (
    <div
      className={`mode-container ${
        theme === "dark" ? "mode-container-dark" : ""
      }`}
    >
      <div className="block">
        <label htmlFor="checkbox">
          <div className="toggle-theme-checkbox">
            <input
              type="checkbox"
              name=""
              id="checkbox"
              onChange={toggleTheme}
              checked={theme === "dark"}
            />
          </div>
        </label>
        <div className="lang-handler-div">
          <span>{theme === "dark" ? "LIGHT MODE" : "DARK MODE"}</span>
          {" | "}
          <span
            className={`lang-handler-span ${
              theme === "dark" ? "lang-handler-span-dark" : ""
            }`}
            onClick={languageHandler}
          >
            {language === "en" ? "TÜRKÇE" : "İNGİLİZCE"} {"'YE GEÇ"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Mode;
