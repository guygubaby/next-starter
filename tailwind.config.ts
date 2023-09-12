import type { Config } from 'tailwindcss'
import TailwindcssAnimate from 'tailwindcss-animate'
import { nextui as NextUI } from '@nextui-org/react'

// @ts-expect-error no types
import { iconsPlugin as IconsPlugin, getIconCollections } from '@egoist/tailwindcss-icons'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  plugins: [
    NextUI(),

    TailwindcssAnimate,

    IconsPlugin({
      collections: getIconCollections([
        'carbon',
      ]),
    }),
  ],
}

export default config
