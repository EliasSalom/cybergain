'use client';
import { Box, Button, TextField } from "@mui/material";
import { FC } from "react";
import styles from "../../style/Form/ContactForm.module.scss";

export const ContactUsForm: FC = () => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
    // Handle form submission logic here
  };
  // todo: change placeholder color
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
      autoComplete="off"
      className={styles.container}
    >
      <TextField
        fullWidth
        label="Name"
        margin="normal"
        required
        className={styles.inputField}
        color="primary"
      />
      <TextField
        fullWidth
        label="Email"
        type="email"
        margin="normal"
        required
        className={styles.inputField}
      />
      <TextField
        fullWidth
        label="Message"
        margin="normal"
        required
        multiline
        rows={4}
        className={styles.inputField}
      />
      <Button
        type="submit"
        variant="contained"
        fullWidth
        className={styles.submitButton}
      >
        Submit
      </Button>
    </Box>
  );
};

export default ContactUsForm;
