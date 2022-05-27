const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#59c59d",
        secondaryColor: "#3aa67b",
        fadedWhite: "#e4e4e4",
      },
      fontFamily: {
        sans: ["Saira", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
