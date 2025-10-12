import type { Config } from "tailwindcss";

const config : Config = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#274885',
        customBlueHover: '#38568F',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"]
      },
      keyframes: {
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "20%, 60%": { transform: "translateX(-4px)" },
          "40%, 80%": { transform: "translateX(4px)" },
        },
      },
      animation: {
        shake: "shake 0.4s ease-in-out",
      }
    }
  },
  plugins: []
};

export default config;
