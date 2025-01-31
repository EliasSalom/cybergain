'use client'
import React, { FC, useState } from 'react';
import { Card, CardContent, Typography, Divider, Box, Button } from '@mui/material';
import styles from "@/style/Card/CourseCard.module.scss";
import DialogForm from '../Dialog/Dialog';
import UserForm from '../Form/UserForm';

interface Props {
  courseName: string;
  description: string;
  image: string;
  information: string[];
}

export const CourseCard: FC<Props> = ({ courseName, description, image, information }) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleDialogOpen = () => setDialogOpen(true);
  const handleDialogClose = () => setDialogOpen(false);

  return (
    <>
      <Card className={styles.CoursesCard} sx={{ backgroundColor: "#1e1e1e", color: "#f5f5f5" }}>
        <Box className={styles.imageContainer}>
          <img src={image} alt={courseName} className={styles.courseImage} />
        </Box>
        <CardContent className={styles.cardContent}>
          <Box className={styles.cardDetails}>
            <Typography className={styles.courseName} component="div" sx={{ color: "#e0e0e0" }}>
              {courseName}
            </Typography>
            {/*<Typography className={styles.description} variant="body2" sx={{ color: "#b0b0b0" }}>*/}
            {/*  {description}*/}
            {/*</Typography>*/}
            {/*<Box className={styles.buttonContainer}>*/}
            {/*  <Button*/}
            {/*    variant="contained"*/}
            {/*    onClick={handleDialogOpen}*/}
            {/*    className={styles.syllabusButton}*/}
            {/*  >*/}
            {/*    Syllabus*/}
            {/*  </Button>*/}
            {/*</Box>*/}
          </Box>
          <Divider className={styles.divider} sx={{ borderColor: "#444" }} />
          <Box>
            {information.map((info, index) => (
              <Typography className={styles.information} key={index} sx={{ color: "#cccccc" }}>
                {info}
              </Typography>
            ))}
          </Box>
        </CardContent>
      </Card>

      <DialogForm open={dialogOpen} onClose={handleDialogClose} title="Syllabus Registration">
        <UserForm />
      </DialogForm>
    </>
  );
};

export default CourseCard;
