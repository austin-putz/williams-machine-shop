import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a365d',
          light: '#2c5282',
          dark: '#1a202c',
        },
        accent: {
          DEFAULT: '#d69e2e',
          light: '#ecc94b',
        },
      },
    },
  },
  plugins: [],
};

export default config;
