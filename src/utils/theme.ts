import { createTheme } from '@mui/material/styles';

import { JetBrains_Mono } from 'next/font/google';

const jetBrainsMono = JetBrains_Mono({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#f5f5f5",
          fontFamily: "Arial, sans-serif",
        },
        ".container": {
          padding: "16px",
          "@media (min-width: 768px)": {
            padding: "32px",
          },
        },
        ".header": {
          fontSize: "1.5rem",
          textAlign: "center",
          "@media (min-width: 768px)": {
            fontSize: "2rem",
          },
        },
      },
    },
  },
});

export default theme;
