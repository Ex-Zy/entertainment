/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      md: "768px",
      lg: "1024px",
    },
    colors: {
      red: "#FC4747",
      white: "#fff",
      blue: {
        default: "#161D2F",
        dark: "#10141E",
        light: "#5A698F",
      },
    },
    fontFamily: {
      sans: ["Outfit", "sans-serif"],
    },
    fontWeight: {
      light: "300",
      medium: "500",
    },
    fontSize: {
      sm: ["0.8125rem", { lineHeight: "1rem" }],
      base: ["0.9375rem", { lineHeight: "1.1875rem" }],
      lg: ["1.125rem", { lineHeight: "1.4375rem" }],
      "2lg": ["1.25rem", { lineHeight: "1.5625rem" }],
      xl: ["1.5rem", { lineHeight: "1.875rem" }],
      "2xl": ["2rem", { lineHeight: "2.5rem" }],
    },
    extend: {},
  },
  plugins: [],
};
