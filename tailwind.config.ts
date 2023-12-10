import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/_components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7214FF',
        secondary_medium_o: '#B756FE',
        secondary_splicy_pink: '#B756FE',
        secondary_neon_blue: '#2D55FB',
        secondary_radical_red: '#FF334B',
        secondary_summer_s: '#32CAFD',
        neutral_white: '#FFFFFF',
        neutral_white_200: '#F6F6F7',
        neutral_black_1000: '#060B27',
        neutral_gray_300: '#8F9BB7',
        neutral_gray_400: '#47507A',
        neutral_gray_500: '#282D45',
        neutral_gray_600: '#151934',
        neutral_gray_800: '#0E1330',
        success_green: '#41E88D',
        warning_yellow: '#FFC933',
        error_red: '#F6285F',
      },
      transitionTimingFunction: {
        'cubic-bezier': 'cubic-bezier(0.19, 1, 0.22, 1) 1s',
      },
      backgroundImage: {
        'title-gradient': 'linear-gradient(180deg, #F6F6F7 0%, #7E808F 100%)',

        // Bg
        'info-bg': 'url("/img/CardInfo.png")',

        // Mask
        'info-bg_mask': 'url("/mask/MaskInfo.svg")',
        'product-bg_mask': 'url("/mask/MaskProduct.svg")',
        'about-bg_mask-1': 'url("/mask/MaskAbout_1.svg")',
        'about-bg_mask-2': 'url("/mask/MaskAbout_2.svg")',
        'about-bg_mask-3': 'url("/mask/MaskAbout_3.svg")',
        'footer-bg_mask': 'url("/mask/MaskFooter.svg")',
      },
    },
  },
  plugins: [],
};
export default config;
