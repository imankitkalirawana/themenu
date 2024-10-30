import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';

const config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        wondershine: ['Wondershine', 'sans-serif'],
        gilroy: ['Gilroy', 'sans-serif']
      }
    }
  },
  darkMode: ['class', '[data-theme^="dark-"]'],
  plugins: [
    require('tailwindcss-animate'),
    nextui({
      themes: {
        light: {
          colors: {
            primary: {
              '50': '#fff3e7',
              '100': '#ffe1c6',
              '200': '#ffd0a5',
              '300': '#febe84',
              '400': '#fead63',
              '500': '#fe9b42',
              '600': '#d28036',
              '700': '#a5652b',
              '800': '#794a1f',
              '900': '#4c2f14',
              foreground: '#000',
              DEFAULT: '#fe9b42'
            }
          }
        },
        dark: {
          colors: {
            primary: {
              '50': '#254329',
              '100': '#3f7145',
              '200': '#599f61',
              '300': '#73cd7d',
              '400': '#93d89a',
              '500': '#b2e4b8',
              '600': '#d2efd5',
              '700': '#f1faf2',
              foreground: '#000',
              DEFAULT: '#599f61'
            }
          }
        }
      }
    })
  ]
} satisfies Config;

export default config;
