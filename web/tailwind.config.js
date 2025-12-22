/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          darkest: "#02171E",
          dark: "#0B2C36",
          primary: "#156B86",
          "primary-600": "#125A73",
          "primary-700": "#0F4A60",
          light: "#5CD3D7",
          "light-100": "#6ED6DA",
          "light-200": "#ADE7E9",
          accent: "#F25B00",
          "accent-600": "#F26200",
          surface: "#F4F8FC",
          mist: "#EEF4F4",
          slate: "#4E5D64",
          "slate-600": "#3D4B51",
        },
      },
      fontFamily: {
        heading: ["'Manrope'", "system-ui", "sans-serif"],
        body: ["'Manrope'", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 32px 80px -40px rgba(21, 107, 134, 0.35)",
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(135deg, rgba(21,107,134,0.96), rgba(92,211,215,0.9))",
        "brand-soft":
          "radial-gradient(120% 120% at 2% 0%, rgba(92,211,215,0.4), transparent), radial-gradient(120% 120% at 100% 15%, rgba(21,107,134,0.35), transparent), #f4f8fc",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 36s linear infinite",
      },
    },
  },
  plugins: [],
};
