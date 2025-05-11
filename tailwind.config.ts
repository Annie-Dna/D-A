import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'navy': {
          900: '#1B1B1B',
        },
        'primary': '#E31E24',
      },
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  plugins: [],
}

export default config 