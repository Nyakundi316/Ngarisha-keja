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
        // "Warm Neutral" palette — cream, beige, ink black, deep olive, muted gold.
        // Token names kept for continuity with earlier palettes:
        //   navy  = ink black (dark sections / strong buttons)
        //   teal  = deep olive (primary accent / CTAs)
        navy: {
          DEFAULT: "#11100E",
          hover: "#292420",
        },
        teal: "#66724A",
        "teal-dark": "#525C3A",
        gold: "#C59A45",
        terracotta: "#A4472B",
        green: "#4E7B52",
        ink: "#11100E",
        slatey: "#3A332D",
        cream: "#F7F1E8",
        beige: "#E4D4C2",
        surface: "#E4D4C2",
        line: "#D8C7B4",
        // Warm off-white for cards, forms, and panels (replaces pure white).
        white: "#FFFDF8",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "0.5rem",
        btn: "0.5rem",
      },
      boxShadow: {
        soft: "0 4px 18px -6px rgba(17, 16, 14, 0.08)",
        lift: "0 14px 34px -14px rgba(17, 16, 14, 0.16)",
        ring: "0 0 0 1px rgba(216, 199, 180, 1)",
      },
      maxWidth: {
        content: "1200px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        draw: {
          "0%": { strokeDashoffset: "220" },
          "100%": { strokeDashoffset: "0" },
        },
        "shine-x": {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) both",
        float: "float 5s ease-in-out infinite",
        "float-slow": "float 7s ease-in-out 0.8s infinite",
        draw: "draw 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.45s both",
        shine: "shine-x 6s linear infinite",
      },
    },
  },
  plugins: [],
};
