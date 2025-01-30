import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  age: Yup.number()
    .min(18, "You must be at least 18 years old")
    .required("Age is required"),
  role: Yup.string().required("Role is required"),
});

export const userValidationSchema = Yup.object().shape({
  fullname: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
});
