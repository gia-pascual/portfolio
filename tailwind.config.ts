import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#0A1529",
          900: "#0F1E3C",
          800: "#132A4E",
          700: "#1B3564",
          600: "#294A80",
        },
        gold: {
          300: "#E6D6AB",
          400: "#D1B274",
          500: "#B38D46",
          600: "#8F6E32",
          700: "#6E5424",
        },
        paper: {
          50: "#FCFBF7",
          100: "#F5F2EA",
        },
        stone: {
          100: "#EFEBE1",
          200: "#E2DCCE",
        },
        ink: {
          900: "#141D2B",
          700: "#394152",
          500: "#5B6475",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      fontSize: {
        "hero": ["clamp(2.75rem, 5.5vw, 4.75rem)", { lineHeight: "1.05", letterSpacing: "-0.01em" }],
        "display-lg": ["clamp(2.25rem, 4vw, 3rem)", { lineHeight: "1.12", letterSpacing: "-0.01em" }],
      },
      maxWidth: {
        content: "1200px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(10, 21, 41, 0.06), 0 10px 28px -14px rgba(10, 21, 41, 0.22)",
        lift: "0 2px 4px rgba(10, 21, 41, 0.08), 0 20px 40px -18px rgba(10, 21, 41, 0.28)",
      },
      backgroundImage: {
        "ledger-lines":
          "repeating-linear-gradient(to bottom, transparent, transparent 27px, rgba(209,178,116,0.14) 28px)",
      },
      transitionTimingFunction: {
        "out-soft": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
