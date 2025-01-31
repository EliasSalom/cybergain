import { Grid, Typography } from "@mui/material";
import { BalloonCard, BalloonCardProps } from "@/components/Cards/BalloonCard";
import { FC } from "react";
import Image from "next/image";

export interface ServiceSectionProps {
    id: string;
    title: string;
    cards: Array<BalloonCardProps>;
    mainImage?:string;
}

export const ServiceSection: FC<ServiceSectionProps> = ({ id, title, cards,mainImage }) => (
    <a id={id}>
        <Grid xs={12} marginTop="100px" >
            <Typography variant="h4" align="center" >
                {title}
            </Typography>
           <ul style={{display:"flex",flexDirection:"column",gap:mainImage?'20px':''}}> {cards.map((card, index) => (
            <li 
            key={index}
            >
                <BalloonCard
                    title={card.title}
                    description={card.description}
                    imageSrc={card.imageSrc || ""}
                    imagePosition={card.imagePosition}
                />
                </li>
            ))}
            </ul>
                  {mainImage&& <div style={{margin:"0 auto",width:"100%",height:"450px",position:"relative",objectFit:"cover"}}> <Image src={mainImage} alt={title}   fill/></div>}

        </Grid>
    </a>
);
