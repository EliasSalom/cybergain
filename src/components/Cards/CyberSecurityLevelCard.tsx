import { Card, CardContent, Box, Typography } from "@mui/material";
import { FC } from "react";
import "@/style/Card/CyberSecurityLevelCard.scss"
interface Props{
    level: string;
    description: string;
    icon: string;
}
export const CyberSecurityLevelCard:FC<Props> = ({ level, description, icon }) => {
    return (
      <Card className="card" sx={{ backgroundColor: '#000', color: '#fff', border: '1px solid #333', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}>
        <CardContent className="card-content" sx={{ textAlign: 'center' }}>
          <Box className="icon" sx={{ mb: 2 }}>
            <img src={icon} alt={`${level} icon`} style={{ height: 50 }} />
          </Box>
          <Typography className="title" variant="h5" sx={{ mb: 1, fontWeight: 'bold' }}>
            {level}
          </Typography>
          <Typography align="left"  className="description" variant="body2" sx={{ fontSize: '0.875rem' }}>
            {description}
          </Typography>
        </CardContent>
      </Card>
    );
  };