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
        customNav: "#060435",
        customNavbar: "#06033c"
      },
    },
    screens:{
      'xxxs': '360px',
      'xxs': '540px',
      'sm': '640px',   
      'md': '768px',      
      'lg': '1024px',     
      'xl': '1280px',     
      '2xl': '1536px',
    },
  },
  plugins: [],
};
