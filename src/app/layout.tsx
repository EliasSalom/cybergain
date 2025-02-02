'use client';

import { Footer } from "@/components/Footer/Footer";
import type { Metadata } from "next";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';
import dynamic from "next/dynamic";
import ParticlesBackground from "@/components/Animation/ParticlesBackground";
import { Container } from "@mui/material";
import theme from '@/utils/theme';

import { JetBrains_Mono } from "next/font/google";
import './style.css';
import {ReactNode} from "react";
import ResponsiveAppBar from "@/components/Navbar/Navba";

const jetBrainsMono = JetBrains_Mono({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const Navbar = dynamic(() => import("@/components/Navbar/Navbar"), {
  ssr: false,
});


export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <title></title>
      </head>
      <body className={jetBrainsMono.className}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <ResponsiveAppBar />
          {/*<ParticlesBackground />*/}
          <Container className={'main-container'}> {children} </Container>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
