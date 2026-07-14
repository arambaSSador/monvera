import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#E9EEF6",
          100: "#C8D3E6",
          200: "#9FB0CE",
          300: "#748DB4",
          400: "#4F6F9C",
          500: "#355580",
          600: "#264066",
          700: "#1A2F4D",
          800: "#0F1F38",
          900: "#091526",
          950: "#050D18",
        },
        accent: {
          DEFAULT: "#E85D04",
          light: "#FF7A29",
          dark: "#C44D00",
          muted: "rgba(232, 93, 4, 0.12)",
        },
        steel: {
          DEFAULT: "#8A97A8",
          light: "#C5CDD8",
          dark: "#5A6575",
        },
        surface: {
          DEFAULT: "#F3F5F8",
          muted: "#E7EBF1",
          elev: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      boxShadow: {
        soft: "0 8px 30px rgba(9, 21, 38, 0.06)",
        lift: "0 18px 50px rgba(9, 21, 38, 0.12)",
        glow: "0 0 36px rgba(232, 93, 4, 0.22)",
        glass: "0 8px 32px rgba(9, 21, 38, 0.08)",
        premium: "0 20px 60px rgba(9, 21, 38, 0.12)",
        card: "0 4px 24px rgba(9, 21, 38, 0.06)",
        "card-hover": "0 12px 40px rgba(9, 21, 38, 0.14)",
      },
      backgroundImage: {
        "hero-veil":
          "linear-gradient(115deg, rgba(5,13,24,0.92) 0%, rgba(9,21,38,0.72) 48%, rgba(5,13,24,0.88) 100%)",
        "steel-sheen":
          "linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 40%)",
        "section-fade":
          "radial-gradient(1200px 400px at 50% 0%, rgba(232,93,4,0.06), transparent 60%)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        kenBurns: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.08)" },
        },
        lineGrow: {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.96)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out forwards",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "ken-burns": "kenBurns 18s ease-out forwards",
        "line-grow": "lineGrow 0.8s ease-out forwards",
        "scale-in": "scaleIn 0.45s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
