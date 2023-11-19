// Importing the colors module from Tailwind CSS
const colors = require('tailwindcss/colors')

// Function to generate primary colors with varying lightness levels
const makePrimaryColor =
  l =>
    ({ opacityValue }) => {
      return (
        `hsl(var(--primary-hue) var(--primary-saturation) ${l}%` +
        (opacityValue ? ` / ${opacityValue})` : ')')
      )
    }

/** 
 * Tailwind CSS Configuration
 * 
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  // Specify the files to watch and process for changes
  content: [
    './layouts/**/*.html', './themes/hextra/layouts/**/*.html'
  ],
  
  // Whitelist specific classes to avoid purging them in production
  safelist: [
    'max-w-screen-xl',
    'max-w-[90rem]',
    'max-w-full'
  ],
  
  // Theme configuration for screens, font sizes, letter spacing, and colors
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    },
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem'
    },
    letterSpacing: {
      tight: '-0.015em'
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#fff',
      // Use Tailwind CSS color palette for predefined colors
      gray: colors.gray,
      slate: colors.slate,
      neutral: colors.neutral,
      red: colors.red,
      orange: colors.orange,
      blue: colors.blue,
      yellow: colors.yellow,
      // Define a custom primary color with various lightness levels
      primary: {
        50: makePrimaryColor(97),
        100: makePrimaryColor(94),
        200: makePrimaryColor(86),
        300: makePrimaryColor(77),
        400: makePrimaryColor(66),
        500: makePrimaryColor(50),
        600: makePrimaryColor(45),
        700: makePrimaryColor(39),
        750: makePrimaryColor(35),
        800: makePrimaryColor(32),
        900: makePrimaryColor(24)
      }
    },
    // Extend the color palette with additional custom colors
    extend: {
      colors: {
        dark: '#111'
      }
    }
  },
  
  // Dark mode configuration
  darkMode: ['class', 'html[class~="dark"]']
};
