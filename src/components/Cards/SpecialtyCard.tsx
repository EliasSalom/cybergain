import { FC } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { SvgIconComponent } from "@mui/icons-material"; 
import styles from "@/style/Card/SpecialtyCard.module.scss";

export interface SpecialtyCardProps {
  icon: SvgIconComponent;  
  title: string;
  description: string;
}

const SpecialtyCard: FC<SpecialtyCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <Card className={styles.specialty} elevation={3}>
      <CardContent className={styles.cardContent}>
        <Icon className={styles.icon} />
        <Typography variant="h6" component="h2" className={styles.title}>
          {title}
        </Typography>
        <Typography variant="body2" className={styles.description}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SpecialtyCard;
