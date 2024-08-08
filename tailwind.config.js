/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        background:"rgba(var(--background))",
        border:"rgba(var(--border))",
        card:"rgba(var(--card))",
        primary:"rgba(var(--primary))",
        secondary:"rgba(var(--secondary))",
        tertiary:"rgba(var(--tertiary))",
        accent:"rgba(var(--accent))",
        heading:"rgba(var(--heading))",
        subheading:"rgba(var(--subheading))",
        paragraph:"rgba(var(--paragraph))",
      }
    },
  },
  plugins: [],
}

