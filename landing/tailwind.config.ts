import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        textBlack: '#191825',
        textLight: '#EEEEEE',
        primary: '#5D50C6',
        secondary: '#F85E9F'
      }
    },
  },
  plugins: [],
};
export default config;
