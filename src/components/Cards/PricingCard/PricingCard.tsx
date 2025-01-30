'use client'
import { FC } from "react";
import { Box, Typography, Button } from "@mui/material";
import styles from "./PricingCard.module.scss";

interface PricingCardProps {
  packageName: string;
  price: string;
  features: string[];
  isRecommended?: boolean;
}

const PricingCard: FC<PricingCardProps> = ({ packageName, price, features, isRecommended = false }) => {
  const handleAction = () => {
    if (packageName === "Business Plan") {
      console.log("Contacting for package:", packageName);
    } else {
      console.log(`Trying package: ${packageName}`);
    }
  };

  return (
    <Box className={`${styles.cardContainer} ${isRecommended ? styles.recommended : ""}`}>
      <Typography variant="h5" className={styles.packageName}>{packageName}</Typography>
      {packageName !== "Business Plan" && (
        <Typography variant="h4" className={styles.packagePrice}>{price}</Typography>
      )}
      <Box className={styles.featureList}>
        {features.map((feature, index) => (
          <Typography key={index} className={styles.featureItem}>{feature}</Typography>
        ))}
      </Box>
      <Button variant="contained" onClick={handleAction} className={styles.actionButton}>
        {packageName === "Business Plan" ? "Contact" : "Try for Free"}
      </Button>
    </Box>
  );
};

export default PricingCard;
