/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'mj': "url('/public/mj.jpg')",
        'kobe': "url('/public/kobe.jpg')",
        'lebron': "url('/public/download.jpg')",
      }
    },
  },
  plugins: [],
}