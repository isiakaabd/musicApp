/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "475px",
        ...defaultTheme.screens,
      },
      colors: {
        main: "#1D2123",
        dark: "#1A1E1F",
        lightGreen: "#609EAF",
        lightDark: "#EFEEE0",
        mainYellow: "#FACD66",
        cardBg: "rgba(51, 55, 59, 0.37)",
      },
      backgroundImage: {
        person: "url('/photo1.png'),url('/vector.png')",
        album: "url('/bg2.png')",
      },
    },

    fontFamily: {
      body: ["Quicksand", "sans-serif"],
    },
  },
  variants: {
    fill: ["hover", "focus"], // this line does the trick
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
  rules: [
    {
      test: /\.(png|jpe?g|gif)$/i,
      use: [
        {
          loader: "file-loader",
        },
      ],
    },
  ],
};
