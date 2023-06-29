const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
        raleway: ["var(--font-raleway)", ...fontFamily.sans],
        openSans: ["var(--font-open-sans)", ...fontFamily.sans],
        rockSalt: ["var(--font-rock-salt)", ...fontFamily.sans],
        marcellus: ["var(--font-marcellus)", ...fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {
      display: ["responsive"],
    },
  },
  plugins: [],
};
