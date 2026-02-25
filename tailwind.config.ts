import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A0A0B",
        foreground: "#F9FAFB",
        primary: "#0A0A0B",
        secondary: "#111111",
        accent: "#3B82F6",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl: "1.25rem",
      },
      boxShadow: {
        "soft-xl":
          "0 24px 80px rgba(15, 23, 42, 0.65), 0 0 0 1px rgba(148, 163, 184, 0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
