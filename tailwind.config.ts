import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["var(--font-playfair)"],
        sans: ["var(--font-dm-sans)"],
        mono: ["var(--font-dm-mono)"],
      },
      colors: {
        ink: "#1c1409",
        parchment: "#f7f4ee",
        gold: "#b07d3a",
      },
    },
  },
  plugins: [],
};

export default config;
