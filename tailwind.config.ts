import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx,mdx}', './components/**/*.{ts,tsx}', './content/**/*.mdx'],
  theme: {
    extend: {
      colors: {
        // Shardwise brand (brand-colors.txt)
        navy: '#061A3A',
        blue: {
          DEFAULT: '#0878F9',
          royal: '#0754D8',
        },
        cyan: '#11C5F5',
        slate: '#566274',

        // Extended palette (design.md)
        primary: {
          DEFAULT: '#0878F9',
          hover: '#0754D8',
          light: '#ecf3ff',
        },
        text: {
          dark: '#0f0f0f',
          black: '#111',
          muted: '#5b5b5b',
          light: '#767676',
        },
        bg: {
          dark: '#000',
          header: '#0f0f0f',
          light: '#f8f7f4',
        },
        accent: {
          green: '#86dd9b',
          yellow: '#feff6e',
          purple: '#ca9fff',
          lime: '#cff601',
        },
        border: '#ddd',
      },

      fontFamily: {
        body: ['var(--font-jakarta)', 'sans-serif'],
        display: ['var(--font-anton)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },

      fontSize: {
        xs: ['12px', { lineHeight: '1.3' }],
        sm: ['14px', { lineHeight: '1.4' }],
        base: ['16px', { lineHeight: '1.5' }],
        lg: ['18px', { lineHeight: '1.55' }],
        xl: ['20px', { lineHeight: '1.6' }],
        '2xl': ['24px', { lineHeight: '1.3' }],
        '3xl': ['28px', { lineHeight: '1.3' }],
        '4xl': ['32px', { lineHeight: '1.25' }],
        '5xl': ['40px', { lineHeight: '1.2' }],
        '6xl': ['48px', { lineHeight: '1.15' }],
        '7xl': ['56px', { lineHeight: '1.1' }],
        '8xl': ['64px', { lineHeight: '1.05' }],
        '9xl': ['72px', { lineHeight: '1.0' }],
      },

      spacing: {
        xs: '4px',
        sm: '8px',
        md: '12px',
        base: '16px',
        lg: '20px',
        xl: '24px',
        '2xl': '32px',
        '3xl': '40px',
        '4xl': '48px',
        '5xl': '64px',
        '6xl': '80px',
        '7xl': '120px',
      },

      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '10px',
        xl: '12px',
        pill: '32px',
        circle: '999px',
      },

      boxShadow: {
        card: '0px 0px 14px 0px rgba(0,0,0,0.2)',
        natural: '6px 6px 9px rgba(0,0,0,0.2)',
        deep: '12px 12px 50px rgba(0,0,0,0.4)',
        sharp: '6px 6px 0px rgba(0,0,0,0.2)',
        crisp: '6px 6px 0px #000',
      },

      transitionTimingFunction: {
        dropdown: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
        reveal: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        header: 'cubic-bezier(0.4, 0.25, 0, 1)',
      },
    },
  },
  plugins: [],
}

export default config
