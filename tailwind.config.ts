import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        secondary: "#06B6D4",
        accent: "#7C3AED",
        bg: {
          DEFAULT: "#0F172A",
          light: "#F8FAFC",
        },
        surface: {
          DEFAULT: "#1E293B",
          light: "#FFFFFF",
        },
        muted: "#94A3B8",
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-glow":
          "radial-gradient(circle at 20% 20%, rgba(37,99,235,0.15), transparent 40%), radial-gradient(circle at 80% 0%, rgba(124,58,237,0.15), transparent 40%), radial-gradient(circle at 50% 100%, rgba(6,182,212,0.12), transparent 40%)",
        "hero-gradient": "linear-gradient(135deg, #2563EB 0%, #7C3AED 50%, #06B6D4 100%)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 10s ease-in-out infinite",
        blob: "blob 12s ease-in-out infinite",
        typewriter: "typewriter 3s steps(30) infinite",
        "fade-up": "fadeUp 0.7s ease forwards",
        "spin-slow": "spin 12s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        blob: {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(30px,-40px) scale(1.1)" },
          "66%": { transform: "translate(-20px,20px) scale(0.95)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
