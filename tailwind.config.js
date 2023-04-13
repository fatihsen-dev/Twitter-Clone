/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         colors: {
            dark: "#16181C",
            darkTwo: "#1D1F23",
            twitterBlue: "#1d9bf0",
            twitterGreen: "#00ba7c",
            textGray: "#71767b",
         },
      },
      container: {
         center: true,
         padding: {
            DEFAULT: "1rem",
            sm: "2rem",
            lg: "4rem",
            xl: "5rem",
            "2xl": "8rem",
         },
      },
   },
   plugins: [],
};
