// languageService.js
const getStoredLanguage = () => localStorage.getItem("language") || "spanish";

const setLanguage = (language) => {
  localStorage.setItem("language", language);
};

export { getStoredLanguage, setLanguage };
