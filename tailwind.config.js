/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: "#0b192f",
      },
    },
    screens:{
      'xxs': '540px'
    },
  },
  plugins: [],
};
