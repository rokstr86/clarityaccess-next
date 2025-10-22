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
      colors: {
        brand: { DEFAULT: "#2563eb", 600: "#1d4ed8", 700: "#1e40af" },
      },
      borderRadius: { xl: "1rem" },
      boxShadow: { card: "0 10px 30px

cd "C:\Users\Jonathan\Documents\clarityaccess-next"

# 1) REMOVE any Tailwind v4 plugins that are causing that error
npm rm -D @tailwindcss/postcss @tailwindcss/node

# 2) Pin stable, compatible versions
npm pkg set dependencies.next="14.2.5"
npm pkg set devDependencies.tailwindcss="3.4.13"
npm pkg set devDependencies.postcss="8.4.41"
npm pkg set devDependencies.autoprefixer="10.4.20"
npm pkg set devDependencies.eslint="8.57.0"
npm pkg set devDependencies.eslint-config-next="14.2.5"

# 3) Clean install state
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
Remove-Item -Force package-lock.json -ErrorAction SilentlyContinue

# 4) Correct PostCSS config for Tailwind v3
@'
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
