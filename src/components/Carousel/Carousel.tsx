'use client'
import React from 'react';
import Slider from 'react-slick';
import styles from './Carousel.module.scss';  // Import SCSS module
import Image from 'next/image';
import {Box} from "@mui/material";

interface CarouselProps {
  logos: string[];
}

const Carousel: React.FC<CarouselProps> = ({ logos }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Default for desktop
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // Mobile landscape
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // Mobile portrait
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // Hide arrows on mobile
  };

  return (
    <Box className={styles.carouselContainer}>
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} className={styles.slide}>
            <Image src={logo} alt={`Company logo ${index}`} className={styles.logo} style={{
              imageResolution:"from-image"
            }} width={175} height={125} objectFit='contain' />
          </div>
        ))}
      </Slider>
    </Box>
  );
};

export default Carousel;
