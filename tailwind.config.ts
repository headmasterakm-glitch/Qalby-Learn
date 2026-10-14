import type { Config } from "tailwindcss";

// Palet diambil dari logo Qalby Learn:
// ungu (lengkung atas), magenta (badan huruf Q), merah (ekor Q).
const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#F1EBFE",
          100: "#E0D2FC",
          300: "#B194F6",
          500: "#5E17EB", // ungu logo
          600: "#4C10C4",
          700: "#3A0C96",
          900: "#1A0846", // latar hero / footer
        },
        magenta: {
          50: "#FCE6F3",
          500: "#CC007E", // magenta logo
          600: "#A80068",
        },
        coral: {
          50: "#FFE9E9",
          500: "#FF2828", // merah logo
          600: "#D91E1E",
        },
        ink: {
          DEFAULT: "#1B1530",
          muted: "#5A5470",
          soft: "#6E6884",
        },
        paper: "#F8F6FC",
      },
      fontFamily: {
        sans: ["'Plus Jakarta Sans Variable'", "system-ui", "sans-serif"],
      },
      maxWidth: {
        site: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
