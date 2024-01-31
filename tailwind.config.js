/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dream: ["Dream Avenue", "sans-serif"],
        drugs: ["TT Drugs Trial", "sans-serif"],
      },
    },
  },

  plugins: [],
};
