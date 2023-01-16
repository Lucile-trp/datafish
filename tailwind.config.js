/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      lato: ['"Lato"', "sans"],
    },

    extend: {
      colors: {
        "black": {
          DEFAULT: "#242424",
        },
        "white": {
          DEFAULT: "#F8F8F8",
        }
      },
    },
  },
  plugins: [],
}
