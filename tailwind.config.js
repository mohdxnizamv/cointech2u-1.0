/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "360px",
      md: "760px",
      lg: "1280px",
      xl: "1440px",
    },
    extend: {
      colors: {
        pupc2u: "#9b45fe",
        pC2u: "#f862e5",
        softBlue: "hsl(231, 69%, 60%)",
        darkred: "#FF0000",
        veryDarkBlue: "hsl(229, 31%, 21%)",
      },

      backgroundImage: () => ({
        dots: "url('../images/bg-dots.svg')",
      }),
    },
  },
  plugins: [],
}
