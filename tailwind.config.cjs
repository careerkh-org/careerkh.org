/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./index.html", "./src/**/*.{js,jsx}", './components/**/*.{html,js}',
    './pages/**/*.{html,js}',
    './index.html', './public/index.html',
    './src/**/*.{html,js}', './src/**/*.js',
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary_200: "#afd995",

        primary_200: "#a2d383",

        primary_300: "#95cd71",

        primary_400: "#87c660",

        primary: "#7AC04E",
        primary_600: "#6ead46",
        primary_700: "#629a3e",
        primary_800: "#558637",
        primary_900: "#49732f",

        secondary: "#AC77B1",
      },
      fontFamily: {
        inter: [ "Inter", "sans-serif" ],
        righteous: [ "Righteous", "cursive" ],

      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};