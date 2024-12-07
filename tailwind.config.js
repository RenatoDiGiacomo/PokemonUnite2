/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{ts,tsx}',
    './node_modules/@istic-ui/react/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        success: '#12d16e',
        warning: '#fcb019',
        info: '#00adf2',
        error: '#fc3932',

        'brand-950': '#300b6a',
        'brand-900': '#4e169c',
        'brand-800': '#5e18bf',
        'brand-700': '#711ee3',
        'brand-600': '#7f30f7',
        'brand-500': '#8c52ff',
        'brand-400': '#a885ff',
        'brand-300': '#c4b1ff',
        'brand-200': '#dcd4ff',
        'brand-100': '#ede8ff',
        'brand-50': '#f5f2ff',

        'secondary-950': '#002f33',
        'secondary-900': '#0d5354',
        'secondary-800': '#0a6365',
        'secondary-700': '#057f80',
        'secondary-600': '#00a8a8',
        'secondary-500': '#04c8c3',
        'secondary-400': '#1de4dd',
        'secondary-300': '#51f7ec',
        'secondary-200': '#90fff3',
        'secondary-100': '#c7fff9',
        'secondary-50': '#effefc',

        'neutral-950': '#212529',
        'neutral-900': '#212529',
        'neutral-800': '#343a40',
        'neutral-700': '#495057',
        'neutral-600': '#868e96',
        'neutral-500': '#adb5bd',
        'neutral-400': '#ced4da',
        'neutral-300': '#dee2e6',
        'neutral-200': '#e9ecef',
        'neutral-100': '#f1f3f5',
        'neutral-50': '#f8f9fa',
      },
      fontFamily: {
        default: ['Mulish', 'sans-serif'],
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        md: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        'button-xs': '0.75rem',
        'button-sm': '0.875rem',
        'button-md': '1rem',
        'button-lg': '1.125rem',
        'button-xl': '1.25rem',
        'title-h1': '3rem',
        'title-h2': '2.5rem',
        'title-h3': '2rem',
        'title-h4': '1.5rem',
        'title-h5': '1.25rem',
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        bold: 700,
      },
      lineHeight: {
        text: '150%',
        title: '150%',
      },
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: 0,
          },
          '100%': {
            opacity: 0.4,
          },
        },
        'fade-in-left': {
          '0%': {
            opacity: 0,
            transform: 'translate3d(-100%, 0, 0)',
          },
          '100%': {
            opacity: 1,
            transform: 'translate3d(0, 0, 0)',
          },
        },
        'fade-in-right': {
          '0%': {
            opacity: 0,
            transform: 'translate3d(100%, 0, 0)',
          },
          '100%': {
            opacity: 1,
            transform: 'translate3d(0, 0, 0)',
          },
        },
        'fade-in-up': {
          '0%': { opacity: 0, transform: 'translate3d(-50%, 100%, 0)' },
          '100%': { opacity: 1, transform: 'translate3d(-50%, -50%, 0)' },
        },
        'fade-out-up': {
          '0%': { opacity: 1 },
          '100%': { opacity: 0, transform: 'translate3d(0, -100%, 0)' },
        },
        'fade-in-down': {
          '0%': { opacity: 0, transform: 'translate3d(0, -100%, 0)' },
          '100%': { opacity: 1, transform: 'translate3d(0, 0, 0)' },
        },
        'chip-fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'chip-scale-right': {
          '0%': {
            transform: 'scaleX(0.6)',
            transformOrigin: '0% 0%',
            opacity: 1,
          },
          '100%': {
            transform: 'scaleX(1)',
            transformOrigin: '0% 0%',
            opacity: 1,
          },
        },
        'progress-bar': {
          '0%': { width: '100%' },
          '100%': { width: '0%' },
        },
      },
      animation: {
        fadeIn: 'fade-in .2s ease-in-out',
        fadeInLeft: 'fade-in-left .2s ease-in-out',
        fadeInRight: 'fade-in-right .2s ease-in-out',
        fadeInUp: 'fade-in-up 0.3s ease-in-out',
        fadeInDown: 'fade-in-down 0.2s ease-in-out',
        fadeOutUp: 'fade-out-up 0.2s ease-in-out',
        chipFadeIn: 'chip-fade-in 0.3s ease-in-out',
        chipScaleRight:
          'chip-scale-right 0.3s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
        progressBar: 'progress-bar linear',
      },
    },
  },
  plugins: [],
}
