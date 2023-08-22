/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  important: true,
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {},
    colors: {
      white: "#ffffff",
      primary: "#2196f3",
      darkprimary: "#1769aa",
      black: colors.black,
      gray: colors.slate,
      red: colors.red,
    },
  },
  background: {},
  plugins: [],
};
