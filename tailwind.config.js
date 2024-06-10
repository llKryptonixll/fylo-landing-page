/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        very_dark_blue: "hsl(243, 87%, 12%)",
        desaturated_blue: "hsl(238, 22%, 44%)",
        bright_blue: "hsl(224, 93%, 58%)",
        moderate_cyan: "hsl(170, 45%, 43%)",
        light_grayish_blue: "hsl(240, 75%, 98%)",
        light_gray: "hsl(0, 0%, 75%)",
      },
      padding: {
        padding: "4em",
        paddingSmall: "1.5em"
      },
      fontFamily: {
        open_sans: ["Open Sans", "sans-serif"],
        railway: ["Raleway", "sans-serif"]
      },
    },
  },
  plugins: [],
}

