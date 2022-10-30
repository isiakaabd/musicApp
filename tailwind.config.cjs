/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#1D2123",
        dark: "#1A1E1F",
        lightGreen: "#609EAF",
      },
      backgroundImage: {
        person:
          "url('./../src/assets/images/photo1.png'),url('./../src/assets/images/vector.png')",
      },
    },

    fontFamily: {
      body: ["Quicksand", "sans-serif"],
    },
  },
  variants: {
    fill: ["hover", "focus"], // this line does the trick
  },
  plugins: [],
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
