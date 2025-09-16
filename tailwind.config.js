/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Brockmann', 'Inter', 'system-ui', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
      },
      colors: {
        'pulse': {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        'dark': {
          900: '#0f172a',
          950: '#020617',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease forwards',
        'card-enter': 'cardEnter 0.4s cubic-bezier(0.19, 1, 0.22, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        cardEnter: {
          '0%': { opacity: '0', transform: 'translateY(30px) scale(0.95)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' }
        }
      }
    },
  },
  plugins: [],
}