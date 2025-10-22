import type { Config } from "tailwindcss"

export default {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: { center: true, padding: "1rem" },
    extend: {
      colors: { brand: { DEFAULT: "#2563eb", 600: "#1d4ed8", 700: "#1e40af" } },
      borderRadius: { xl: "1rem" },
      boxShadow: { card: "0 10px 30px rgba(2,12,27,.12)" },
    },
  },
  plugins: [],
} satisfies Config
