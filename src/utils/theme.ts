import { createTheme } from '@mui/material/styles';

import { JetBrains_Mono } from 'next/font/google';

const jetBrainsMono = JetBrains_Mono({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  typography: {
    fontFamily: jetBrainsMono.style.fontFamily,
  },
});

export default theme;
