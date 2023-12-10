import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0c121c', // old: #2F38D9
        secondary: '#FFC436',
        tertiary: '#484848',
        body: '#1E1E1E',
        caption: '#3A3A3A',
        light: '#F3F3F3',
        cream: '#F8F8F8',
        altdark: '#1E293B',
        captiontext: '#1E1E1E',
        'form-input': '#F6F6F6',
        'form-border': '#E7E7E7'
      },
      fontSize: {
        xxs: '0.6rem',
        xs: '0.75rem',
        sm: '0.8rem',
        base: '1rem',
        lg: '2rem',
        xl: '1.25rem',
        xxl: '2.75rem',
        xxxl: '3.5rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '4rem'
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '100%',
          md: '640px',
          lg: '1024px',
          xl: '1024px',
          '2xl': '1024px'
        }
      },
      screens: {
        xs: '360px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px'
      },
      boxShadow: {
        md: `0px 6px 16px 0px rgba(0, 0, 0, 0.06)`
      }
    }
  },
  plugins: []
}
export default config
