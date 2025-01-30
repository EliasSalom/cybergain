import { Box, Typography } from '@mui/material';
import { FC } from 'react';

interface CardProps {
  title: string;
  content: string;
}

const MissionCard: FC<CardProps> = ({ title, content }) => {
  return (
    <Box
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        padding: '1rem',
        borderRadius: '8px',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        marginBottom: '1rem',
      }}
    >
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      <Typography>
        {content}
      </Typography>
    </Box>
  );
};

export default MissionCard;
