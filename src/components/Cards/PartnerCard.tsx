import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { FC } from "react";
import styles from "../../style/Card/PartnerCard.module.scss"; 
interface Props {
  name: string;
  logo: string;
  description: string;
}

export const PartnerCard: FC<Props> = ({ name, logo, description }) => {
  return (
    <Card className={styles.card}>
      <CardMedia
        component="img"
        className={styles.cardMedia}
        image={logo}
        alt={`${name} logo`}
      />
      <CardContent className={styles.cardContent}>
        <Typography gutterBottom variant="h5" component="div" className={styles.cardTitle}>
          {name}
        </Typography>
        <Typography variant="body2" className={styles.cardDescription}>
          {description ?? ""}
        </Typography>
      </CardContent>
    </Card>
  );
};
