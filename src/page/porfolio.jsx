import React, { useState, useEffect } from "react";
import {
  getStoredLanguage,
  setLanguage,
} from "./../assets/languageService/languageService";
import Home from "./screen/home";
import data from "../assets/data/data.json";
import MyCanvas from "./screen/myCanvas";
import MyTravel from "./screen/myTravel";

const Portfolio = () => {
  const [language, setLanguageState] = useState(getStoredLanguage());
  useEffect(() => {
    setLanguage(language);
  }, [language]);

  const handleLanguageChange = (selectedLanguage) => {
    setLanguageState(selectedLanguage);
  };
  console.log(data[language][0]);
  return (
    <>
      <div className="">
        <div className="fixed font-dream">
          <button
            className="text-white"
            onClick={() => handleLanguageChange("spanish")}
          >
            Español
          </button>
          <button
            className="text-white pl-5"
            onClick={() => handleLanguageChange("english")}
          >
            English
          </button>
        </div>

        <div className="md:pl-20">
          <Home data={data[language][0]} />
          <MyCanvas data={data[language][0]} />
          <MyTravel data={data[language][0]} />
        </div>
      </div>
    </>
  );
};
export default Portfolio;
