import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#0B1730",
          900: "#10203F",
          800: "#152B4E",
          700: "#1D3660",
          600: "#2B4A7D",
        },
        gold: {
          300: "#E3D2A4",
          400: "#CBAD6B",
          500: "#B08D45",
          600: "#93733A",
        },
        paper: {
          50: "#FBFAF6",
          100: "#F4F2EC",
        },
        stone: {
          100: "#EFEDE7",
          200: "#E4E1D9",
        },
        ink: {
          900: "#16202E",
          700: "#3A4453",
          500: "#5B6575",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        content: "1180px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(11, 23, 48, 0.06), 0 8px 24px -12px rgba(11, 23, 48, 0.18)",
      },
      backgroundImage: {
        "ledger-lines":
          "repeating-linear-gradient(to bottom, transparent, transparent 27px, rgba(203,173,107,0.16) 28px)",
      },
    },
  },
  plugins: [],
};
export default config;
