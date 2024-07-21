import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',

        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          400: 'hsl(var(--primary-400))',
          700: 'hsl(var(--primary-700))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          400: 'hsl(var(--secondary-400))',
          700: 'hsl(var(--secondary-700))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        accent: {
          400: 'hsl(var(--accent-400))',
          700: 'hsl(var(--accent-700))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          400: 'hsl(var(--destructive-400))',
          700: 'hsl(var(--destructive-700))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: 'hsl(var(--muted))',
        white: 'hsl(var(--white))',
        paid: 'hsl(var(--paid))',
        pending: 'hsl(var(--pending))',
        draft: 'hsl(var(--draft))',

        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config
