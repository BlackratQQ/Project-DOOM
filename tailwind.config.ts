import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        abc: ["Sedgwick Ave Display", "cursive"],
        covered: ["Covered By Your Grace", "cursive"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        "7.5xl": "5rem",
        "10xl": "9rem",
        "11xl": "10rem",
        "12xl": "11rem",
        "13xl": "12rem",
        "14xl": "13rem",
        "15xl": "14rem",
        "16xl": "15rem",
        "17xl": "16rem",
        "18xl": "17rem",
        "19xl": "18rem",
        "clamp-heading": "clamp(5rem, 14vw, 17rem)",
      },
      colors: {
        primaryColor: "var(--primary-color)",
        secondaryColor: "var(--secondary-color)",
        primaryHeadingColor: "var(--primary-heading-color)",
        secondaryHeadingColor: "var(--secondary-heading-color)",
        backgroundColor: "var(--background-color)",
        textColor: "var(--text-color)",
      },
    },
  },
  plugins: [],
};

export default config;
