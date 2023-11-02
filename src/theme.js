import { createTheme, em } from '@mantine/core';

const theme = createTheme({
  white: '#fff',
  black: '#111',
  primaryShade: 4,
  colors: {
    // TODO: Добавить больше цветов
    dark: [
      '#121417',
      '#000000', // brand dark.9
    ],
    gray: ['#F7F7FB', '#8A8A89'],
    blue: ['#3470FF', '#0B44CD'],
  },
  fontFamily: 'Inter',
  breakpoints: {
    xs: em(375),
    md: em(768),
    xl: em(1440),
  },
});

export default theme;
