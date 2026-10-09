export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pz: {
          bg: "#0A0A0F",
          surface: "#141420",
          line: "#232334",
          purple: "#7C3AED",
          purpleSoft: "#A855F7",
          purpleLight: "#C4B5FD",
          white: "#FFFFFF",
          gray: "#9CA3AF",
          grayDark: "#6B7280"
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "Segoe UI", "sans-serif"]
      },
      borderRadius: {
        card: "14px",
        pill: "999px"
      },
      boxShadow: {
        glow: "0 0 40px rgba(124, 58, 237, 0.25)",
        soft: "0 10px 30px rgba(0, 0, 0, 0.5)"
      },
      backgroundImage: {
        "pz-radial": "radial-gradient(1000px 500px at 50% -10%, rgba(124,58,237,0.25), transparent 60%)"
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        }
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out both",
        "fade-in": "fade-in 0.6s ease-out both"
      }
    }
  },
  plugins: []
};
