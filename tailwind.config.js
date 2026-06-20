/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0F2A43",
          hover: "#163A5C",
        },
        teal: "#16A394",
        "teal-dark": "#0E8576",
        green: "#2E9E5B",
        ink: "#1B2733",
        slatey: "#5B6B7A",
        surface: "#F4F7F9",
        line: "#E2E8ED",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "1rem",
        btn: "0.75rem",
      },
      boxShadow: {
        soft: "0 6px 24px -8px rgba(15, 42, 67, 0.12)",
        lift: "0 16px 40px -12px rgba(15, 42, 67, 0.22)",
        ring: "0 0 0 1px rgba(226, 232, 237, 1)",
      },
      maxWidth: {
        content: "1200px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [],
};
