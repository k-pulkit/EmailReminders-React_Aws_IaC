/** @type {import('tailwindcss').Config} */
export default {
  corePlugins: {
    preflight: false,
  },
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: ["0.75rem", "1rem"],
      sm: ["0.875rem", "1.25rem"],
      base: ["1rem", "1.219rem"],
      lg: ["1.025rem", "1.371rem"],
      xl: ["1.25rem", "1.524rem"],
      "2xl": ["1.5rem", "1.829rem"],
      "3xl": ["1.75rem", "3.125rem"],
      "4xl": ["3rem", "3.625rem"],
      "6xl": ["5rem", "4.625rem"],
      "8xl": ["6rem", "6.625rem"],
    },
    extend: {
      spacing: {
        "2/3": "66.666667%",
      },
      colors: {
        primary: "#4A5FC1",
        "coral-red": "#F92C85",
        "slate-gray": "#FDF5DF",
        "pale-blue": "#5EBEC4",
        "white-400": "rgba(255, 255, 255, 0.80)",
      },
      backgroundImage: {},
      screens: {
        wide: "1440px",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
    require("tailwindcss-animated"),
    require("@tailwindcss/aspect-ratio"),
    "prettier-plugin-tailwindcss",
  ],
};
