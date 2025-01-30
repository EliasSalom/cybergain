import { FC } from "react";
import styles from "@/style/Specialties.module.scss";
import { Box, Typography, Grid, Paper } from "@mui/material";

const specialties = [
  { title: "Advanced Security", description: "Top-notch protection against cyber threats." },
  { title: "Data Encryption", description: "Secure encryption for all your sensitive data." },
  { title: "24/7 Monitoring", description: "Round-the-clock security monitoring." },
];

const Specialties: FC = () => {
  return (
    <section className={styles.specialtiesSection}>
      <Typography variant="h4" align="center" gutterBottom>
        Our Specialties
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {specialties.map((specialty, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper elevation={3} className={styles.specialtyCard}>
              <Typography variant="h6">{specialty.title}</Typography>
              <Typography variant="body2">{specialty.description}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default Specialties;
