import { FC } from 'react';
import { CardContent, Typography, Box } from '@mui/material';
import Image from 'next/image';
import styles from '../../style/Card/TeamCard.module.scss';

export interface IEmployee {
  name: string;
  role: string;
  image: string;
}

export const TeamCard: FC<IEmployee> = ({ name, role, image }) => {
  return (
    <Box className={styles.teamCard}>
      <div className={styles.imageWrapper}>
        <Image src={image} alt={name} layout="fill" objectFit="cover" />
      </div>
      <Box className={styles.hoverBox}>
        <CardContent>
          <Typography variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2">
            {role}
          </Typography>
        </CardContent>
      </Box>
    </Box>
  );
};
