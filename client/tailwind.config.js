/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Epilogue"],
      heading: ["ClashDisplay-Variable"],
    },
    container: {
      center: "true",
      padding: {
        xl: "4rem",
        md: "2rem",
        sm: "1rem",
        DEFAULT: "0.5rem",
      },
    },
    screens: {
      "2xl": "1680px",
      xl: "1440px",
      lg: "1024px",
      md: "768px",
      sm: "640px",
      xs: "480px",
    },
    extend: {
      boxShadow: {
        custom:
          "0px 79px 128px 0px rgba(192, 192, 192, 0.09), 0px 28.836px 46.722px 0px rgba(192, 192, 192, 0.06), 0px 13.999px 22.683px 0px rgba(192, 192, 192, 0.05), 0px 6.863px 11.119px 0px rgba(192, 192, 192, 0.04), 0px 2.714px 4.397px 0px rgba(192, 192, 192, 0.03)",
      },
      fontFamily: {
        logo: ["Red Hat Display"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        acpurple: "#7B61FF",
        acblue: "#26A4FF",
        acred: "#FF6550",
        acgreen: "#56CDAD",
        acyellow: "#FFB836",
        neutrals100: "#25324B",
        neutrals80: "#515B6F",
        neutrals60: "#7C8493",
        neutrals40: "#A8ADB7",
        neutrals20: "#E4E5E7",
        neutrals10: "#F9FAFC",
        neutrals0: "#F8F8FD",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
