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
        body: ["var(--font-body)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        gray: {
          50: "#E8E6E6",
          100: "#DADADA",
          200: "#edf2f7",
          250: "#35343C",
          300: "#e2e8f0",
          350: "#26262E",
          400: "#cbd5e0",
          450: "#6F6F6F",
          500: "#4A4A59",
          600: "#31323d",
          700: "#3c3d48",
          750: "#2C2D37",
          800: "#1d1e25",
          850: "#19181E",
          900: "#110f15",
          950: "#171717",
          1000: "#110F15",
        },
        primary: {
          DEFAULT: "#3FB3A0",
          light: "#45B299",
          dark: "#1AA790",
        },
      },
    },
  },
  plugins: [],
};
export default config;
