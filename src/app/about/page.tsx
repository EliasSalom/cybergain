"use client";
import { TeamCard } from "@/components/Cards/TeamCard";
import {Box, Container, Grid, Typography} from "@mui/material";
import dynamic from "next/dynamic";
import Image from "next/image";
import { employees, missionData } from "@/utils/data/data";
import styles from "./about.module.scss";
import { BalloonCard } from "@/components/Cards/BalloonCard";
import { PageHero } from "@/components/Hero/PageHero";
import Head from "next/head";
import { getS3URL } from "@/utils/getEnv";
import shield from "/public/shield.png"

const DynamicMap = dynamic(() => import("@/components/Map/Map"), {
  ssr: false,
});

const About = () => {
  return (
    <>
      <Head>
        <title>About Us | Cybersecurity Company</title>
        <meta
          name="description"
          content="Learn more about our cybersecurity services and how we protect your business from digital threats."
        />
        <meta
          name="keywords"
          content="cybersecurity, business protection, digital threats"
        />
      </Head>
      <Container className={styles.container} sx={{zIndex:"1"}}>
        <PageHero
          title="About Us"
          description="We are a leading cyber security company committed to protecting your
          business from digital threats. Our team of experts utilizes the latest
          technologies to ensure your data is safe and secure."
        />
        <Box>
          <Box className={styles.missionSection}>
            <Box justifyContent="space-between" alignItems="center" sx={{ marginBottom:"15px", paddingBottom:"20px"}}>
              <Typography variant="h3" gutterBottom sx={{ flex: "1" }}>
                BUILDING A SAFER FUTURE
              </Typography>
              <Typography sx={{ flex: "1" }}>
                Read More On Our Commitment To Protecting And Empowering In The
                World Of Cybersecurity. Discover How We Drive Change, Foster
                Innovation, And Safeguard Tomorrow's Digital Landscape.
              </Typography>
            </Box>
            {/*<Box className={styles.imageBox} flex="1">*/}
            {/*  <Image*/}
            {/*    src={shield}*/}
            {/*    alt="Shield Image"*/}
            {/*  />*/}
            {/*</Box>*/}
            <Box flex="1" pl={4} display={'flex'} flexDirection={"column"} rowGap={"20px"}>
              {missionData.map((cardsData, index) => (
                <BalloonCard {...cardsData} />
              ))}
            </Box>
          </Box>
        </Box>

        <Box className={styles.mapSection}>
          <Typography variant="h4" align="center" gutterBottom>
            Our Branch
          </Typography>
          <DynamicMap />
        </Box>

        <Box className={styles.teamSection}>
          <Typography variant="h4" align="center" gutterBottom>
            Our Team
          </Typography>
          <Grid container spacing={4} className={styles.teamGrid}>
            {employees.map(({ name, role, image }, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <TeamCard name={name} role={role} image={getS3URL()+'/Employees Pictures/'+ image} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default About;
