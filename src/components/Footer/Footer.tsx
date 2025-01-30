'use client'
import { FC } from "react";
import { Box, Button, TextField, Typography, Container, Link, InputAdornment } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import '@/style/Footer/Footer.scss';
import useShowSignUp from "@/hooks/useShowSignup";

export const Footer: FC = () => {
  const showSignUp=useShowSignUp()

  return (
    <Box className="footer">
      <Container>
        <Box className="footer-content">
          <Box className="footer-section">
            <Typography variant="h6">STAY CONNECT</Typography>
            <Typography sx={{
              color: '#ffffffb3',
              fontFamily: 'Rubik-Regular',
              fontSize: '16px',
              fontWeight: '400',
              lineHeight: '20px'
            }}>Reach Out To Us At :</Typography>
            <Typography sx={{
              color: '#fff',
              fontFamily: 'Rubik-Regular',
              fontSize: '16px',
              fontWeight: '400',
              lineHeight: '20px',
              marginTop: "10px"
            }}>+972 52-209-3578</Typography>
          </Box>
          <Box className="footer-section">
            <Typography sx={{
              color: '#fff',
              fontFamily: 'Rigid-Regular',
              fontSize: '25px',
              fontWeight: '400',
              lineHeight: '33px',
              margin: '0',
              textTransform: 'uppercase',
            }} variant="h5">sign in and sign up</Typography>

            <Typography sx={{
              color: '#ffffffb3',
              fontFamily: 'Rubik-Regular',
              fontSize: '16px',
              fontWeight: '400',
              lineHeight: '20px',
              marginBottom: '10px'
            }}>We Suggest Signing In Our Portal</Typography>
           {showSignUp&& <><Link href="/signup" underline="none">
              <Button variant="contained" sx={{ marginRight: '10px' }} className="btns">Sign Up</Button>
            </Link>
            <Link href="/signin" underline="none">
              <Button variant="contained" className="btns">Sign In</Button>
            </Link>
            </>}
          </Box>
        </Box>
        <Box className="footer-social">
          <Link href="https://www.linkedin.com/showcase/cybergain-training-est/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
          </Link>
          <Link href="https://www.instagram.com/cyber_gain_dubai/" target="_blank" rel="noopener noreferrer">
            <InstagramIcon />
          </Link>
          <Link href="https://www.youtube.com/@CyberGainCenter" target="_blank" rel="noopener noreferrer">
            <YouTubeIcon />
          </Link>
        </Box>
        <Typography variant="body1" align="center">
          &copy; 2024 Cyber Security Co. All rights reserved.
        </Typography>
      </Container >
    </Box >
  );
};
