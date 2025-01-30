import Image from "next/image";
import { Box, CardContent, CardHeader, Typography, Chip, CardMedia, Card } from "@mui/material";
import styles from "@/style/Card/EventCard.module.scss";
import { FC } from "react";
export interface Event {
  id: string;
  title: string;
  description: string;
  location: string;
  startDate: string;
  endDate: string;
  type: string;
  isActive: boolean;
  image?: string;
}

interface EventCardProps {
  event: Event;
}


const EventCard: React.FC<EventCardProps> = ({
 event
}) => {
  return (
    <Card className={`${styles.card} ${event.isActive ? styles.active : styles.inactive}`}>
      <CardContent>
        <Typography variant="body2" className={styles.date}>
          {event.startDate} - {event.endDate}
        </Typography>
        <Typography variant="h5" className={styles.title}>
          {event.title}
        </Typography>
        <Typography variant="body2" className={styles.location}>
          {event.location}
        </Typography>
        <Typography variant="body1" className={styles.description}>
          {event.description}
        </Typography>
        <Chip label={event.type} className={styles.typeChip} />
      </CardContent>
      {event.image && <CardMedia className={styles.image} component="img" image={event.image} alt={event.title} />}
    </Card>
  );
};

export default EventCard;
