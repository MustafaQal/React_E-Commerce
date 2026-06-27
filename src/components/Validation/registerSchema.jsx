import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const registerSchema = yup.object({
    fullName: yup.string().required("Full name is required").min(3, "Password must be at least 3 characters"),
    email: yup.string().email("Invalid email").required("Email is required"),
    userName: yup.string().required("Username is required"),
    password: yup.string().required("Password is required").min(8, "Password must be at least 8 characters")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[0-9]/, "Password must contain at least one number")
      .matches(/[!@#$%^&*]/, "Password must contain at least one special character"),
    phoneNumber: yup.string().required("Phone number is required")
      .matches(/^\d+$/, "Phone number must contain only digits")
  });

export default registerSchema;