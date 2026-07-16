import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy:     "#1B2A4A",
        paper:    "#F3F5F7",
        ink:      "#16202E",
        rust:     "#C1440E",
        concrete: "#6B7280",
        sage:     "#3F6357",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        sans:    ["var(--font-inter)", "sans-serif"],
        mono:    ["var(--font-ibm-plex-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
