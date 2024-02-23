import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        circularSmLight:
          "repeating-radial-gradient(#121212 2px, #e2e8f0 5px, #e2e8f0 50px)",
        circularSmDark:
          "repeating-radial-gradient(#e2e8f0 2px, #121212 5px, #121212 50px)",
        circularLight:
          "repeating-radial-gradient(#e2e8f0 2px, #ooFFFFFF 5px, #ooFFFFFF 100px)",
        circularDark:
          "repeating-radial-gradient(#e2e8f0 2px, #121212 5px, #121212 100px)",
      },
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans serif"],
      },
    },
  },
  plugins: [],
};
export default config;
