
import { Box, Typography } from '@mui/material';
import '@/style/Hero/PageHero.scss';
import { FC } from 'react';

type PageHeroProps = {
  title: string;
  description: string;
};

export const PageHero: FC<PageHeroProps> = ({ title, description }) => {
  return (
    <Box
      className="page-hero"
    >
      <Box className="page-hero__content">
        <Typography variant="h1" className="page-hero__title">
          {title}
        </Typography>
        <Typography variant="h3" className="page-hero__description">
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

