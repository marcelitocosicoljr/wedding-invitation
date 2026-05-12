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
        burgundy: {
          50:  "#fdf2f4",
          100: "#fce7ea",
          200: "#f9cfd6",
          300: "#f4a8b4",
          400: "#ed7289",
          500: "#e04068",
          600: "#c92253",
          700: "#a81744",
          800: "#800020",  // PRIMARY
          900: "#6B1E2F",
          950: "#3d0d19",
        },
        gold: {
          50:  "#fefce8",
          100: "#fef9c3",
          200: "#fef08a",
          300: "#fde047",
          400: "#f5c842",
          500: "#D4AF37",  // PRIMARY GOLD
          600: "#b8962a",
          700: "#9a7c1f",
          800: "#7d6318",
          900: "#6a5215",
          950: "#3d2f09",
        },
        cream: {
          50:  "#FFFDF7",
          100: "#FAF0E6",  // PRIMARY CREAM
          200: "#F5E6D3",
          300: "#EDD5BC",
          400: "#E0C4A8",
          500: "#D4B08A",
        },
        blush: {
          50:  "#fff5f7",
          100: "#ffe8ed",
          200: "#FFD5DC",
          300: "#FFB6C1",  // PRIMARY BLUSH
          400: "#F4A0AE",
          500: "#E8899A",
          600: "#D4708A",
        },
      },
      fontFamily: {
        script:  ["var(--font-great-vibes)", "cursive"],
        serif:   ["var(--font-playfair)", "Georgia", "serif"],
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        sans:    ["var(--font-raleway)", "system-ui", "sans-serif"],
      },
      animation: {
        "float":        "float 6s ease-in-out infinite",
        "float-slow":   "float 10s ease-in-out infinite",
        "float-fast":   "float 4s ease-in-out infinite",
        "petal-fall":   "petalFall 8s linear infinite",
        "shimmer":      "shimmer 2s linear infinite",
        "pulse-slow":   "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow":    "spin 20s linear infinite",
        "glow":         "glow 3s ease-in-out infinite alternate",
        "fadeInUp":     "fadeInUp 0.8s ease forwards",
        "fadeIn":       "fadeIn 1s ease forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "33%":      { transform: "translateY(-15px) rotate(2deg)" },
          "66%":      { transform: "translateY(-8px) rotate(-2deg)" },
        },
        petalFall: {
          "0%":   { transform: "translateY(-10vh) translateX(0) rotate(0deg)",   opacity: "1" },
          "100%": { transform: "translateY(110vh) translateX(100px) rotate(720deg)", opacity: "0" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition:  "200% center" },
        },
        glow: {
          "0%":   { boxShadow: "0 0 5px rgba(212,175,55,0.3),  0 0 10px rgba(212,175,55,0.2)" },
          "100%": { boxShadow: "0 0 20px rgba(212,175,55,0.6), 0 0 40px rgba(212,175,55,0.4), 0 0 60px rgba(212,175,55,0.2)" },
        },
        fadeInUp: {
          "0%":   { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      backgroundImage: {
        "gradient-radial":   "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gold-shimmer":      "linear-gradient(90deg, transparent, rgba(212,175,55,0.4), transparent)",
        "burgundy-gradient": "linear-gradient(135deg, #800020 0%, #6B1E2F 50%, #3d0d19 100%)",
        "romantic-gradient": "linear-gradient(135deg, #800020 0%, #a81744 30%, #6B1E2F 60%, #3d0d19 100%)",
      },
      boxShadow: {
        "gold":        "0 0 20px rgba(212,175,55,0.3), 0 4px 15px rgba(212,175,55,0.2)",
        "gold-lg":     "0 0 40px rgba(212,175,55,0.4), 0 8px 30px rgba(212,175,55,0.3)",
        "burgundy":    "0 4px 20px rgba(128,0,32,0.3), 0 2px 8px rgba(128,0,32,0.2)",
        "glass":       "0 8px 32px 0 rgba(31, 38, 135, 0.07)",
        "romance":     "0 20px 60px rgba(128,0,32,0.15), 0 4px 20px rgba(212,175,55,0.1)",
      },
      backdropBlur: {
        xs: "2px",
      },
      spacing: {
        "128": "32rem",
        "144": "36rem",
      },
    },
  },
  plugins: [],
};

export default config;
