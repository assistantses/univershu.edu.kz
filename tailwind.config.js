/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // --- BRAND TOKENS: change these to rebrand the whole site ---
        brand: {
          DEFAULT: '#0345BF', // primary blue accent (logo, links, kickers)
          dark: '#023091',
          light: '#1F5FE0',
          50: '#EAF1FD',
          100: '#CFE0FA',
        },
        action: {
          // main repeated CTA/button color (most "Подробнее" / "Показать все" buttons)
          DEFAULT: '#2B3594',
          dark: '#1F2670',
          light: '#3D48B8',
        },
        teal: {
          DEFAULT: '#0AC9C9', // bright admissions CTA band
          dark: '#089B9B',
          light: '#4EDCDC',
        },
        gold: {
          DEFAULT: '#CDB020', // ranking/trust banner accent
          dark: '#A88E19',
          light: '#E0C94A',
        },
        cream: '#F9F6EF',
        night: '#171717', // footer background
        ink: '#151416',
        muted: '#5B6675',
      },
      fontFamily: {
        sans: ['"Open Sans"', 'system-ui', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
        display: ['Roboto', 'system-ui', 'Segoe UI', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 8px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 6px 20px rgba(0, 0, 0, 0.14)',
      },
      maxWidth: {
        content: '1200px',
      },
    },
  },
  plugins: [],
}
