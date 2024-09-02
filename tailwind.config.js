/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "rgba(var(--background))",
        border: "rgba(var(--borderp))",
        card: "rgba(var(--card))",
        primary: "rgba(var(--primary))",
        secondary: "rgba(var(--secondary))",
        tertiary: "rgba(var(--tertiary))",
        accent: "rgba(var(--accent))",
        heading: "rgba(var(--heading))",
        subheading: "rgba(var(--subheading))",
        paragraph: "rgba(var(--paragraph))",
      },
      keyframes: {
        "trans-right": {
          "0% , 100%": {
            transform:"translateY(30px)",
          },
          "50%": { transform: "translateY(0px)" },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
      animation:{
        'trans-right':'trans-right 2s ease-in-out infinite',
        "marquee": 'marquee 30s linear infinite',
      }
    },
  },
  plugins: [],
};
