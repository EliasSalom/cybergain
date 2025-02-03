import { CyberSecurityLevelCard } from "@/components/Cards/CyberSecurityLevelCard";
import { Hero } from "@/components/Hero/Hero";
import { levels, courses,specialties, partnersLogos } from "@/utils/data/data";
import { Container, Grid, Typography } from "@mui/material";
import { CourseCard } from "@/components/Cards/CourseCard";
import SpecialtyCard from "@/components/Cards/SpecialtyCard";
import Carousel from "@/components/Carousel/Carousel";


export const generateMetadata = () => ({
  title: 'Welcome to CyberGain Academy - Your Gateway to Cybersecurity Training',
  description: 'Cyber Gain Center is your premier destination for comprehensive cybersecurity training and solutions. Learn from industry experts, gain practical skills, and protect your organization from emerging cyber threats. Our tailored offerings, including red team, blue team, and IT training, prepare you for real-world cybersecurity challenges. Discover our cutting-edge services and how we can help you safeguard your organization. ',
  keywords: ['cybersecurity training', 'hands-on labs', 'CyberGain Academy', 'tech education', 'cybersecurity courses'],
});


export default function Home() {
  return (
    <main style={{padding:"4px", zIndex:"1"}}>
      <Container className="header-container">
        <Hero title="True Cyber Security Is Preparing For What's Next, Not What Was Last"
          description="CyberGain is a leading provider of cybersecurity solutions and education, empowering individuals, enterprises, and businesses of all sizes to navigate the dynamic tech landscape."/>
      </Container>
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Cyber Security Levels
        </Typography>
        <Grid container spacing={4}>
          {levels.map((level, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <CyberSecurityLevelCard level={level.level} description={level.description} icon={level.icon} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Our Specialties
        </Typography>
        <Grid container spacing={4}>
          {specialties.map((specialty, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <SpecialtyCard key={specialty.title} {...specialty}/>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Our Partners
        </Typography>
       <Carousel logos={partnersLogos}/>
      </Container>
      <Container sx={{ py: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Our Training
        </Typography>
        <Grid container spacing={4} sx={{ justifyContent: 'center' }}>
          {courses.map((course, index) => (
            <Grid item xs={12} sm={6} md={6} lg={6} key={index}>
              <CourseCard
                courseName={course.name}
                description={course.description}
                image={course.image}
                information={course.information}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  );
}
