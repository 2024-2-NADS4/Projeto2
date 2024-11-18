import { createStitches } from '@stitches/react';

export const { getCssText, styled, css, globalCss, theme, createTheme } =
  createStitches({
    theme: {
      colors: {
        white: '#FFFFFF',
        black: '#000000',

        'logout-color': '#F75A68',
        'blue-button': '#2D5880',
        'gray-400': '#D9D9D9',
        'light-black': '#201D1D',


        'nav-gradient': 'linear-gradient(180deg, #2D5880 0%, #11314F 54.5%, #09121A 100%)',
      },

      transitions: {
        default: 'all 0.2s ease', // Defina a transição padrão aqui
      },
    },
  });
