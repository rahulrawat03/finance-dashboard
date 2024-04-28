import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    colors: {
      "primary-surface": "#edf2f7",
      "secondary-surface": "#f7fafc",
      primary: "#322659",
      secondary: "#8b82aa",
      tertiary: "#ed8936",
      "on-primary-surface": "#515660",
      "on-secondary-surface": "#1a202c",
      "on-primary": "#edf2f7",
    },
  },
};

export default config;
