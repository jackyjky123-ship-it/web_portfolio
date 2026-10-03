/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: {
          DEFAULT: "#26332b",
          deep: "#161d14",
        },
        cream: {
          DEFAULT: "#f3eedf",
          soft: "#e8e1ce",
        },
        gold: "#e7a93d",
        terracotta: "#cd5a3a",
        ink: "#14160f",
        mint: "#8fcfc0",
        "line-dark": "rgba(243, 238, 223, 0.14)",
        "line-light": "rgba(20, 22, 15, 0.12)",
      },
      fontFamily: {
        serif: ["Fraunces", "serif"],
        sans: ['"Space Grotesk"', "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      spacing: {
        "nav-h": "76px",
      },
      boxShadow: {
        window: "0 30px 60px -25px rgba(0, 0, 0, 0.55)",
        contact: "0 12px 24px -10px rgba(0, 0, 0, 0.35)",
        badge: "0 15px 30px -10px rgba(0, 0, 0, 0.4)",
      },
    },
  },
  plugins: [],
};
