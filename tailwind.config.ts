import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a3c34', // Forest green
        secondary: '#f4f4f4', // Light gray
        accent: '#d4a373', // Warm gold
      },
    },
  },
  plugins: [],
};

export default config;