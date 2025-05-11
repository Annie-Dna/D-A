/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)'],
      },
      colors: {
        primary: '#5A90A8',
        secondary: '#002147',
        accent: '#5A90A8',  // Using primary yellow as accent
        'accent-hover': '#ca9607', // Darker yellow for hover states
        'bg-light': '#F8F9FA', // Light background color
        'text-primary': '#002147', // Using secondary color for primary text
        'text-secondary': '#6B7280', // Gray for secondary text
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
