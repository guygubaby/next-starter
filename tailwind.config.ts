import type { Config } from 'tailwindcss'
import tailwindcssAnimate from 'tailwindcss-animate'

// @ts-expect-error no types
import { getIconCollections, iconsPlugin } from '@egoist/tailwindcss-icons'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    tailwindcssAnimate,
    iconsPlugin({
      collections: getIconCollections([
        'carbon',
      ]),
    }),
  ],
}

export default config
