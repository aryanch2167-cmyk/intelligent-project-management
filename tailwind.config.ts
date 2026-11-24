import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#09090F",
          secondary: "#11111B",
          card: "#171725",
          sidebar: "#10101A",
          hover: "#1F1F33",
        },
        projexa: {
          primary: "#8B5CF6",
          secondary: "#A78BFA",
          accent: "#C084FC",
          dark: "#09090F",
          card: "#171725",
          border: "rgba(139, 92, 246, 0.2)",
          glow: "rgba(139, 92, 246, 0.35)",
        },
        text: {
          primary: "#FFFFFF",
          secondary: "#A1A1AA",
          muted: "#71717A",
        },
        status: {
          success: "#22C55E",
          warning: "#F59E0B",
          danger: "#EF4444",
          info: "#3B82F6",
        },
      },
      boxShadow: {
        glow: "0 0 25px -5px rgba(139, 92, 246, 0.3)",
        "glow-lg": "0 0 35px -5px rgba(139, 92, 246, 0.45)",
        "glow-sm": "0 0 15px -3px rgba(139, 92, 246, 0.25)",
        card: "0 10px 30px -10px rgba(0, 0, 0, 0.5)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
        "3xl": "1.5rem",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
