/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors : {
        primary : '#FF6363',
        secondary : {
          100 : '#E2E205',
          200 : '#888883'
        }
      }
    },
  },
  plugins: [],
}

