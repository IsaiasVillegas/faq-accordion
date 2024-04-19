/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "376px",
      },
      colors: {
        white: "#ffffff",
        pink: "#ad28eb",
        "light-pink": "#f8eeff",
        "pale-purple": "#8B6990",
        "dark-purple": "#301534",
      },
      fontFamily: {
        workSans: ["var(--font-work-sans)", ...fontFamily.sans],
      },
      boxShadow: {
        cardShadow: "0px 32px 56px 0px rgba(80,0,118,0.1)",
      },
      backgroundImage: {
        "pattern-desktop":
          "url('/src/assets/images/background-pattern-desktop.svg')",
        "pattern-mobile":
          "url('/src/assets/images/background-pattern-mobile.svg')",
      },
    },
  },
  plugins: [],
};
