import { FC } from "react";
import { Grid, Container, Box, Typography } from '@mui/material';
import PricingCard from "@/components/Cards/PricingCard/PricingCard";
import PricingTable from "@/components/Tables/PricingTable/PricingTable";
import { allPackagesFeatures, packages } from "@/utils/data/data";
import styles from './pricing.module.scss'; 

export const generateMetadata = () => ({
  title: 'Our Pricing Plans - Cybersecurity Company',
  description: `Explore our flexible pricing options for our cybersecurity training programs and services. Discover the value we offer and how our affordable solutions can help you invest in your organization's cybersecurity. Our hands-on training programs provide exceptional value for the investment. Contact us for a personalized quote or to discuss your specific needs. `,
});

const PricingPage: FC = () => {
  return (
    <Box className={styles.container} component="section">
      <Box className={styles.section}>
        <Typography variant="h4" className={styles.title} component="h2">
          Our Plans
        </Typography>
        <Grid container spacing={4}>
          {packages.map((pkg, index) => (
         <Grid item xs={12} sm={6} md={3} key={index}> 
         <PricingCard
           packageName={pkg.packageName}
           price={pkg.price}
           isRecommended={pkg.isRecommended}
           features={pkg.features}
         />
       </Grid>
          ))}
        </Grid>
      </Box>

      <Box className={styles.section}>
        <Typography variant="h4" className={styles.title} component="h2">
          Compare Plans
        </Typography>
        <PricingTable packages={packages} allFeatures={allPackagesFeatures} />
      </Box>
    </Box>
  );
};

export default PricingPage;
