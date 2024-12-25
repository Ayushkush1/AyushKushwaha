import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'slide-down': {
          '0%': {
            transform: 'translateY(-100%)',
            // 'border-bottom-left-radius': '40%',
            // 'border-bottom-right-radius': '40%',
          },
          '50%': {
            transform: 'translateY(0)',
            // 'border-bottom-left-radius': '20%',
            // 'border-bottom-right-radius': '20%',
          },
          '100%': {
            transform: 'translateY(0)',
            // 'border-bottom-left-radius': '0%',
            // 'border-bottom-right-radius': '0%',
          },
        },
        'slide-up': {
          '0%': {
            transform: 'translateY(0)',
            // 'border-bottom-left-radius': '0%',
            // 'border-bottom-right-radius': '0%',
          },
          '50%': {
            transform: 'translateY(0)',
            // 'border-bottom-left-radius': '30%',
            // 'border-bottom-right-radius': '30%',
          },
          '100%': {
            transform: 'translateY(-100%)',
            // 'border-bottom-left-radius': '50%',
            // 'border-bottom-right-radius': '50%',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        'slide-down': 'slide-down 1.5s ease-in-out',
        'slide-up': 'slide-up 1.5s ease-in-out',

      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
