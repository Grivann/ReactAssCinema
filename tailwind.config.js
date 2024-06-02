/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '50px 50px 150px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
}
