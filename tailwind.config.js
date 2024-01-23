/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    colors: {
      'dominionpurple': '#5A2B91',
      'dominionpink': '#F39190',
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}