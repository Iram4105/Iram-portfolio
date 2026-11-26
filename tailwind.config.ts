import type { Config } from "tailwindcss";
const config: Config = {
  darkMode: "class",
  content: ["./src/app/**/*.{ts,tsx}","./src/components/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: {
      primary: "#315C4B", secondary: "#A8C6A0", accent: "#B89B65",
      bg: { DEFAULT: "#142B25", light: "#F4F6EF" },
      surface: { DEFAULT: "#234337", light: "#FFFFFF" },
      muted: "#9AADA0",
    },
    fontFamily: { heading:["var(--font-poppins)","sans-serif"], body:["var(--font-inter)","sans-serif"], mono:["var(--font-mono)","monospace"] },
    backgroundImage: {
      "grid-glow":"radial-gradient(circle at 18% 18%, rgba(168,198,160,.18), transparent 42%), radial-gradient(circle at 82% 8%, rgba(184,155,101,.12), transparent 42%), radial-gradient(circle at 48% 100%, rgba(49,92,75,.22), transparent 45%)",
      "hero-gradient":"linear-gradient(135deg,#315C4B 0%,#A8C6A0 52%,#B89B65 100%)",
    },
    animation: {
      float:"float 6s ease-in-out infinite","float-slow":"float 10s ease-in-out infinite",
      blob:"blob 12s ease-in-out infinite",typewriter:"typewriter 3s steps(30) infinite",
      "fade-up":"fadeUp .7s ease forwards","spin-slow":"spin 12s linear infinite",
    },
    keyframes: {
      float:{"0%,100%":{transform:"translateY(0px)"},"50%":{transform:"translateY(-16px)"}},
      blob:{"0%,100%":{transform:"translate(0,0) scale(1)"},"33%":{transform:"translate(30px,-40px) scale(1.1)"},"66%":{transform:"translate(-20px,20px) scale(.95)"}},
      fadeUp:{"0%":{opacity:"0",transform:"translateY(24px)"},"100%":{opacity:"1",transform:"translateY(0)"}},
    },
  }},
  plugins: [],
};
export default config;
