import { ContactUsForm } from "@/components/Form/ContactUsForm";
import { Container, Typography } from "@mui/material";
import { FC } from "react";

export const generateMetadata = () => {
  return {
    title: "Contact Us - Cybersecurity Experts",
    description: "Get in touch with us for inquiries, bookings, or to schedule a consultation. Find our contact information, including phone number, email, and social media channels. Connect with our team to discuss your cybersecurity needs and explore how we can help you safeguard your organization. ",
  };
};

const ConnectUs: FC = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="body1" align="center" paragraph>
        We would love to hear from you. Reach out to us for any inquiries about how we can secure your business.
      </Typography>
      <ContactUsForm/>
    </Container>
  );
};

export default ConnectUs;
