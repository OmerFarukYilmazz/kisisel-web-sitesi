import "./App.css";
import { DataContext } from "./context/DataContext";

import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Skills from "./components/skills/Skills";
import Profile from "./components/profile/profile";
import Projects from "./components/projects/projects";
import Footer from "./components/footer/footer";
import Mode from "./components/mode/mode";

import React, { useEffect, useState } from "react";
import { languages } from "./data/languages";

function App() {
  const storedLanguage = localStorage.getItem("language");
  //const [language, setLanguage] = useState("tr");
  const [language, setLanguage] = useState(
    storedLanguage ? storedLanguage : "en"
  );
  const languageHandler = () => {
    setLanguage(language === "en" ? "tr" : "en");
  };
  useEffect(() => {
    localStorage.setItem("language", language);
    console.log(language + " effect");
  }, [language]);

  const content = language === "tr" ? languages.tr : languages.en;

  //const [theme, setTheme] = useState("light");
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme || "light";
  });
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const data = {
    content,
    language,
    languageHandler,
    theme,
    toggleTheme,
  };

  return (
    <>
      <DataContext.Provider value={data}>
        {/*<Mode language={language} languageHandler={languageHandler} /> */
        /* Props Method */}
        <Mode />
        <Header />
        <Hero />
        <Skills />
        <Profile />
        <Projects />
        <Footer />
      </DataContext.Provider>
    </>
  );
}

export default App;
