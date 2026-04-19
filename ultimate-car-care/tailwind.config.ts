import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#111418",
        cream: "#F5F1E8",
        rust: {
          DEFAULT: "#C9561E",
          50: "#FBEFE7",
          100: "#F6DBC8",
          200: "#EFB791",
          300: "#E69359",
          400: "#D97632",
          500: "#C9561E",
          600: "#A6451A",
          700: "#823516",
          800: "#5F2511",
          900: "#3C170A",
        },
        steel: {
          DEFAULT: "#6B7280",
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        },
        neutral: {
          50: "#FAFAF7",
          100: "#F2F1EC",
          200: "#E4E2D9",
          300: "#CAC7BA",
          400: "#A8A498",
          500: "#807D74",
          600: "#5D5B55",
          700: "#403F3B",
          800: "#26251F",
          900: "#15140F",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "monospace"],
      },
      fontWeight: {
        // display: 600/700
        // body: 400/500
        // mono: 400/500
      },
      boxShadow: {
        card: "0 2px 8px -2px rgba(60, 23, 10, 0.08), 0 8px 24px -8px rgba(201, 86, 30, 0.12)",
      },
      // Tailwind defaults retained; emphasize 12/16/24/32 rhythm in component spacing.
    },
  },
  plugins: [],
};

export default config;
