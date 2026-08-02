import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // --- Palette signature PIGMENT ---
        noir: {
          DEFAULT: "#0A0A0A", // fond principal des sections sombres
          soft: "#141414",    // panneaux / cartes sur fond noir
          line: "#262626",    // séparateurs sur fond noir
        },
        blanc: {
          DEFAULT: "#FAFAF8", // fond principal des sections claires
          soft: "#F1F0EC",    // panneaux sur fond clair
        },
        encre: {
          DEFAULT: "#1C1C1C", // texte sur fond clair
          muted: "#6B6B68",   // texte secondaire
        },
        orange: {
          DEFAULT: "#E8531C", // orange signature (accent principal)
          light: "#FF6B35",   // survols / halos
          dark: "#B8410F",    // pressed states
        },
      },
      fontFamily: {
        display: ["var(--font-archivo)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        widest2: "0.28em",
      },
      backgroundImage: {
        "grain": "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZmlsdGVyIGlkPSJuIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC44NSIgbnVtT2N0YXZlcz0iMyIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNuKSIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')",
      },
      animation: {
        "marquee": "marquee 28s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
