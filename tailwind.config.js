/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        cartred:"#FF0000",
        menucolor:"#FB1E1E",
        cardoverlay:"rgba(256,256,256,0.4)", 
        card:"rgba(256,256,256,0.8)",
        cartbg:"#282a2c",
        cartItem:"#2e3033",
        cartTotal:"#343739",
      },
      screens:{
        sm:"480px",
        md:"768px",
        lg:"1024px",
        xl:"1280px",
        "2xl":"1536px"
      }
    },
  },
  plugins: [require('tailwind-scrollbar'),],
}

