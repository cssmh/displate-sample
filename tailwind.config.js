/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#d4af37", 
        natural: "#d1b49f",
        gray: "#808080",
      },
},
  },
  plugins: [require('daisyui'),],
}

