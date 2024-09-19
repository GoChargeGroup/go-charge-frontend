/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#161622",
        secondary: {
          DEFAULT: "#FF9C01",
          100: "#FF9001",
          200: "#FF8E01",
        },
        black: {
          DEFAULT: "#000",
          100: "#1A1A1A",
          200: "#232533",
        },
        gray: {
          100: "#CDCDE0",
          200: "#F6F6F7",
        },
        green: {
          100: "#32CD32",
          200: "#67D372"
        },
        blue: {
          100: "#2C3E50",
        },
        customWhite: {
          DEFAULT: "#E9F3F5",
          200: "#FFFFFF",
        },
      },
      fontFamily: {
        pthin: ["Poppins-Thin", "sans-serif"],
        pextralight: ["Poppins-ExtraLight", "sans-serif"],
        plight: ["Poppins-Light", "sans-serif"],
        pregular: ["Poppins-Regular", "sans-serif"],
        pmedium: ["Poppins-Medium", "sans-serif"],
        psemibold: ["Poppins-SemiBold", "sans-serif"],
        pbold: ["Poppins-Bold", "sans-serif"],
        pextrabold: ["Poppins-ExtraBold", "sans-serif"],
        pblack: ["Poppins-Black", "sans-serif"],
        sfregular: ["SFPRODISPLAYREGULAR", "sans-serif"],
        sfbold: ["SFPRODISPLAYBOLD", "sans-serif"],
      },
    },
  },
  plugins: [],
}

