'use client'
import { FC } from "react";
import styles from '@/style/Hero/Hero.module.scss'; 
import Link from 'next/link'; 
import useShowSignUp from "@/hooks/useShowSignup";
import { Box, Typography, Button } from '@mui/material';

interface Props {
    title: string;
    description: string;
}

export const Hero: FC<Props> = ({ title, description }) => {
    const showSignUp = useShowSignUp();
    
    return (
        <Box className={styles['custom-box']}>
            <Typography className={styles['title']} variant="h1" align="center">{title}</Typography>
            <Typography className={styles['description']} variant="body1" align="center">
                {description}
            </Typography>
            <div className={styles['button-container']}>
                {showSignUp && (
                    <Link href="/signup">
                        <Button className={styles['styled-button']} variant="contained">
                            Request A Demo
                        </Button>
                    </Link>
                )}
            </div>
        </Box>
    );
};
