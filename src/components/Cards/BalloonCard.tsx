import React, { FC } from "react";
import { Box, Typography } from "@mui/material";
import "@/style/Card/BalloonCard.scss";
import Image from 'next/image';

export interface BalloonCardProps {
  title: string;
  description: string;
  imageSrc?: string;
  imagePosition: "left" | "right";
}

export const BalloonCard: FC<BalloonCardProps> = ({
  title,
  description,
  imageSrc = "",
  imagePosition,
}) => {
  const isImageLeft = imagePosition === "left";

  return (
    <Box className={`balloon-card ${isImageLeft ? 'left' : 'right'}`}>
      {imageSrc&&  <Box sx={{display: { xs: "none", md: "block" }}}><Image src={imageSrc} alt={title} className="balloon-image" style={{  width: "300px",
        height: "300px",
        objectFit: "cover"}} width={300} height={300}/></Box>}
      <Box className="text-container">
        <Typography variant="h5" className="balloon-title" >
          {title}
        </Typography>
        <Typography variant="body1" className="balloon-description">
          {description}
        </Typography>
      </Box>
    </Box>
  );
};
