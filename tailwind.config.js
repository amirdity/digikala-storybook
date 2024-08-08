/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // colors: {
    //   base: "#fff", //nature-000-digikala
    //   input: "#f0f0f1", // input in digikala
    //   textInput: "#81858b",
    //   transparent: "transparent",
    //   current: "currentColor",
    //   // white: "#ffffff",
    //   // purple: "#3f3cbb",
    //   // midnight: "#121063",
    //   // metal: "#565584",
    //   // tahiti: "#3ab7bf",
    //   // silver: "#ecebff",
    //   // "bubble-gum": "#ff77e9",
    //   // bermuda: "#78dcca",
    // },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px", //small screen for digikal
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
