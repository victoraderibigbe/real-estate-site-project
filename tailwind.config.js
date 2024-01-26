/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        dominionpurple: "#5A2B91",
        dominionpink: "#F39190",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      height: {
        'half': '50vh',
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
