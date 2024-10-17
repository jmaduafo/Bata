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
        // primary: "#f5e8e3",
        primary: "#fff",
        primaryMuted: "rgba(255, 255, 255, .10)",
        primaryOutline: "rgba(255, 255, 255, .15)",
        secondary: "#000",
        accent: "#BEFFA7",
      },
      backgroundImage: {
        background: "linear-gradient(#316EE7, #5D6BE6)"
      }
    },
  },
  plugins: [],
};
export default config;
