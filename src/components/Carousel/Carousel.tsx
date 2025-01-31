'use client'
import React from 'react';
import Slider from 'react-slick';
import styles from './Carousel.module.scss';  // Import SCSS module
import Image from 'next/image';

interface CarouselProps {
  logos: string[];
}

const Carousel: React.FC<CarouselProps> = ({ logos }) => {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <div className={styles.carouselContainer}>
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} className={styles.slide}>
            <Image src={logo} alt={`Company logo ${index}`} className={styles.logo} style={{
              imageResolution:"from-image"
            }} width={175} height={125} objectFit='contain' />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
