import { Box } from "@mui/material";
import { PageHero } from "@/components/Hero/PageHero";
import { serviceHeroData, services } from "@/utils/data/data";
import { ServiceSection } from "@/components/ServiceSection/ServiceSection";
import { FC } from "react";

export const generateMetadata = () => ({
  title: 'Our Services - Cybersecurity Solutions',
  description: `Enhance your cybersecurity capabilities with our expert-led consulting services. We offer tailored solutions in the following areas: 
IT Security: Strengthen your organization's IT infrastructure and security posture. 
Blue Team: Develop your team's skills in defending against cyber threats and incident response. 
Red Team: Simulate real-world attacks to identify vulnerabilities and improve your organization's security posture. 
Development: Ensure secure coding practices and protect your applications from vulnerabilities. 
DevOps: Integrate security into your development and operations processes for a more secure and efficient pipeline. 
Our consulting services are designed to meet your specific needs and provide practical solutions to your cybersecurity challenges. Contact us to discuss your requirements and explore how we can help you safeguard your organization. `,
  keywords: ['IT Security', 'Blue Team', 'Red Team', 'DevOps', 'Development'],
});

const Services: FC = () => {
  return (
    <Box >
      <PageHero {...serviceHeroData} />

      {services.map(({ id, title, cards,mainImage }) => (
        <ServiceSection key={id} id={id} title={title} cards={cards} mainImage={mainImage}/>
      ))}
    </Box>
  );
};

export default Services;
