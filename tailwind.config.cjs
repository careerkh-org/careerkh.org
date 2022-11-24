/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}", './components/**/*.{html,js}',
    './pages/**/*.{html,js}',
    './index.html', './public/index.html',
    './src/**/*.{html,js}', './src/**/*.js',
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#7AC04E",
        secondary: "#AC77B1",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        righteous: ["Righteous", "cursive"],

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