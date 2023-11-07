import { createTheme } from '@mantine/core';

const theme = createTheme({
  white: '#fff',
  black: '#111',
  primaryShade: 4,
  colors: {
    light: ['#f9f9f9'],
    dark: ['#121417', '#000000', '#121212'],
    gray: ['#F7F7FB', '#8A8A89'],
    blue: ['#3470FF', '#0B44CD'],
  },
  fontFamily: 'Inter',
  breakpoints: {
    xs: '375px',
    md: '768',
    xl: '1440',
  },
});

export default theme;
