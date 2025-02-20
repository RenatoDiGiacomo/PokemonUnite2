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
        muted: '#A0A4A8',

        'brand-950': '#4E1310',
        'brand-900': '#4E1310',
        'brand-800': '#6A1A15',
        'brand-700': '#87201A',
        'brand-600': '#A4261F',
        'brand-500': '#C03028 ',
        'brand-400': '#D64A42',
        'brand-300': '#E8645C',
        'brand-200': '#F27F77',
        'brand-100': '#F8A3A1',
        'brand-50': '#FCD1CE',

        'secondary-950': '#664B00',
        "secondary-900": "#664B00",
        "secondary-800": "#806000",
        "secondary-700": "#997400",
        "secondary-600": "#B38800",
        "secondary-500": "#CC9C00",
        "secondary-400": "#E6B000",
        "secondary-300": "#FFCC00",
        "secondary-200": "#FFDD55",
        "secondary-100": "#FFE699",
        "secondary-50": "#FFF2CC",

        'neutral-950': '#212529',
        "neutral-900": "#1A1A1A",
        "neutral-800": "#292929",
        "neutral-700": "#3D3D3D",
        "neutral-600": "#525252",
        "neutral-500": "#666666",
        "neutral-400": "#7A7A7A",
        "neutral-300": "#8F8F8F",
        "neutral-200": "#A3A3A3",
        "neutral-100": "#B8B8B8",
        "neutral-50": "#D1D1D1",
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
