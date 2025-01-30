'use client'
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Typography } from "@mui/material";
import InputField from "../InputField/InputField";
import { FC } from "react";
import { userValidationSchema } from '../../schema/validation';
import styles from "../../style/Form/UserForm.module.scss";

interface UserFormValues {
  fullname: string;
  email: string;
}

const UserForm: FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<UserFormValues>({
    resolver: yupResolver(userValidationSchema),
  });

  const onSubmit: SubmitHandler<UserFormValues> = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <Box className={styles.userFormContainer}>
      <Typography className={styles.title} variant="h4" gutterBottom>
        User Form
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box className={styles.inputFieldWrapper}>
          <InputField
            name="fullname"
            label="Full Name"
            type="text"
            control={control}
          />
        </Box>
        <Box className={styles.inputFieldWrapper}>
          <InputField
            name="email"
            label="Email"
            type="email"
            control={control}
          />
        </Box>
        <Button type="submit" variant="contained" className={styles.submitButton}>
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default UserForm;
