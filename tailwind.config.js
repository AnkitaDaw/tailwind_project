/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/*.{html, js}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat'],
        heading: ['Raleway'],
        copyright: ['Roboto'],
      },
      colors: {
        'theme-yellow': '#ffc107',
        'theme-red': '#d31638',
        'theme-black': '#181525',
      },
      dropShadow: {
        'text': '0px 4px 5px rgba(0, 0, 0, 0.25)',
        'button': '0px 4px 4px rgba(0, 0, 0, 0.25)',
        'member': '0 0.25rem 0.5rem rgba(0, 0, 0, 0.1)',
      },
      height: {
        '200': '200px',
        '300': '300px',
        '350': '350px',
        '400': '400px',
        '500': '500px',
        '700': '700px',
      },
      borderWidth: {
        '3': '3px',
      },
      backgroundImage: {
        'feature1': 'linear-gradient(10.2deg, #270d12 11.64%, rgba(125, 215, 201, 0) 66.64%)',
        'feature2': 'linear-gradient(13.21deg, #d31638 16.31%, rgba(59, 158, 169, 0) 39.05%)',
        'feature3': 'linear-gradient(13.21deg, #d31638 16.31%, rgba(59, 158, 169, 0) 39.05%)',
        'feature4': 'linear-gradient(13.93deg, #7a4923 28.18%, rgba(175, 204, 124, 0) 45.67%)',
      }
    },
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      '2xl': '1400px',
    },
    // colors: {
    //   'theme-yellow': '#fcb316',
    //   'theme-red': '#d31638',
    // },
    container: {
      screens: {
        'sm': '100%',
        'md': '100%',
        'lg': '100%',
        'xl': '1140px',
        '2xl': '1320px',
      },
      padding: {
          DEFAULT: '1rem',
          sm: '0.5rem',
          lg: '0.75rem',
          xl: '0.75rem',
          '2xl': '1rem',
      },
      center: true,
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

