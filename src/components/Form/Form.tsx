'use client'
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Typography } from "@mui/material";
import { validationSchema } from "@/schema/validation";
import InputField from "../InputField/InputField";
import { FC } from "react";

interface FormValues {
  username: string;
  email: string;
  age: number;
  role: string;
}

const Form: FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4">Form</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{ marginBottom: 2 }}>
          <InputField
            name="username"
            label="Username"
            type="text"
            control={control}
          />
          {errors.username && <Typography color="error">{errors.username.message}</Typography>}
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <InputField
            name="email"
            label="Email"
            type="email"
            control={control}
          />
          {errors.email && <Typography color="error">{errors.email.message}</Typography>}
        </Box>

        <Box sx={{ marginBottom: 2 }}>
          <InputField
            name="age"
            label="Age"
            type="number"
            control={control}
          />
          {errors.age && <Typography color="error">{errors.age.message}</Typography>}
        </Box>

        <Box sx={{ marginBottom: 2 }}>
          <InputField
            name="role"
            label="Role"
            type="select"
            control={control}
            options={["Admin", "User", "Guest"]}
          />
          {errors.role && <Typography color="error">{errors.role.message}</Typography>}
        </Box>

        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default Form;
