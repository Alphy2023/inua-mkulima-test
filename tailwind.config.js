/** @type {import('tailwindcss').Config} */


export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "980px",
        lgl: "1024x",
        xl: "1280px",
      },
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
      },
      colors: {
        subtitle:"#009438"
      },
      boxShadow: {
      },
    },
  },
};

