import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import '@/style/Card/BalloonCard2.scss';

interface BalloonCardProps {
    title: string;
    description: string;
    number: string
}

const BalloonCard2: FC<BalloonCardProps> = ({ title, description,number }) => {
    return (
        <Box className="balloon-card">
            <Box className="line-container">
                <Box className="line-left gradient-bg">
                    <Typography variant="h6" className="text-number">
                       {number}
                    </Typography>
                </Box>
                <Box className="line-right">
                    <Box className="text-content">
                        <Typography variant="h6" className="title">
                            {title}
                        </Typography>
                        <Typography variant="body2" className="description">
                            {description}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default BalloonCard2;
