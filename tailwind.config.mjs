/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Catppuccin-inspired pastel palette
        primary: {
          50: '#f5f3ff',
          100: '#ede9fe', 
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
        accent: {
          50: '#fef7f3',
          100: '#fdf2f8',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
        },
        // Enhanced pastel pink colors for terminal theme
        'pastel-pink': {
          50: '#fef7f3',
          100: '#fdeef0',
          200: '#fbd9e1',
          300: '#f7bbc4',
          400: '#f29ba7',
          500: '#ed7c8a',
          600: '#d15d6f',
          700: '#a8475a',
          800: '#7f3246',
          900: '#5e2433',
        },
        // Terminal-inspired colors
        'terminal': {
          'green': '#00ff41',
          'amber': '#ffbf00',
          'cyan': '#00ffff',
          'purple': '#bf00ff',
          'pink': '#ff69b4',
          'bg': '#0d1117',
          'bg-light': '#161b22',
          'border': '#30363d',
          'text': '#c9d1d9',
          'text-muted': '#8b949e',
        },
        // Additional pastel colors for variety
        lavender: {
          50: '#faf7ff',
          100: '#f4efff',
          200: '#ebe2ff',
          300: '#dbc8ff',
          400: '#c5a3ff',
          500: '#a67cf5',
          600: '#8b5cf6',
          700: '#7c3aed',
          800: '#6d28d9',
          900: '#5b21b6',
        },
        peach: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        mint: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        sky: {
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
        },
        rose: {
          50: '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#f43f5e',
          600: '#e11d48',
          700: '#be123c',
          800: '#9f1239',
          900: '#881337',
        },
        // Custom pastel background colors with terminal enhancements
        pastel: {
          bg: '#fefbff',
          'bg-dark': '#161b22',  // Terminal-inspired dark background
          surface: '#f7f4ff',
          'surface-dark': '#21262d',  // Terminal-inspired dark surface
          'terminal-bg': '#0d1117',
          'terminal-surface': '#161b22',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'gradient': 'gradient 8s ease infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}