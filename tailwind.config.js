/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'primary' : '#0e0d0d',
        "secondary" : "#bbb"
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ['black'],
  },
}

