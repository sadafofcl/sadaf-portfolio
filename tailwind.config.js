/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "hsl(var(--bg))",
        fg: "hsl(var(--fg))",
        primary: "hsl(var(--primary))",
        secondary: "hsl(var(--secondary))",
        border: "hsl(var(--border))",
        card: "hsl(var(--card))",
      },
    },
  },
  plugins: [],
};
