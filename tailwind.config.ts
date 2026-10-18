import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        emerald: {
          950: "#022c22",
        },
        gold: {
          300: "#f6d47c",
          400: "#eec25e",
          500: "#d9a83f",
          600: "#b8862f",
        },
      },
      fontFamily: {
        urdu: [
          '"Noto Nastaliq Urdu"',
          '"Jameel Noori Nastaleeq"',
          '"Urdu Typesetting"',
          "Tahoma",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
export default config;
