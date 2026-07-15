/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        obsidian: "#0B0B0C",
        charcoal: "#171513",
        smoke: "#8A8580",
        ivory: "#F5F1E8",
        gold: {
          DEFAULT: "#C6A15B",
          light: "#E4C888",
          dark: "#8C6E37",
        },
        wood: {
          DEFAULT: "#5E3B22",
          dark: "#3B2314",
        },
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "serif"],
        body: ["'Manrope'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "gold-line": "linear-gradient(90deg, transparent, #C6A15B, transparent)",
      },
    },
  },
  plugins: [],
}
