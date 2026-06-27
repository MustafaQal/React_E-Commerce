import { Box, TextField, Typography, Button } from '@mui/material'
import axios from 'axios';
import React from 'react'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm } from 'react-hook-form'

export default function Register() {

  let registerSchema = yup.object({
    fullName: yup.string().required("Full name is required"),
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

  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(registerSchema) });
  const registerForm = async (values) => {
    //console.log(value);
    try {
      const response = await axios.post('https://knowledgeshop.runasp.net/api/auth/Account/Register', values);
      console.log(response.data);
    } catch (error) {
      console.log(error.response?.data);
    }
  }

  return (
    <Box component={'section'} className='register_form' sx={{ py: 5, pb: 5 }}>
      <Typography component={'h1'} variant='h1' py={3}> Register </Typography>
      <Box component="form" sx={{
        display: 'flex', flexDirection: 'column', gap: 2, py: 5,
        alignItems: 'center'
      }}
        onSubmit={handleSubmit(registerForm)}
      >

        <TextField {...register("fullName")} fullWidth label="Full Name" variant="outlined"
          error={errors.fullName}
          helperText={errors.fullName?.message}
        />
        <TextField {...register("email")} fullWidth label="Email" variant="outlined"
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <TextField {...register("userName")} fullWidth label="UserName" variant="outlined"
          error={errors.userName}
          helperText={errors.userName?.message}
        />
        <TextField  type="password" {...register("password")} fullWidth label="Password" variant="outlined"
          error={errors.password}
          helperText={errors.password?.message}
        />
        <TextField {...register("phoneNumber")} fullWidth label="Phone Number" variant="outlined"
          error={errors.phoneNumber}
          helperText={errors.phoneNumber?.message}
        />
        <Button variant="contained" sx={{ bgcolor: '#009688' }} type='submit'>Register</Button>

      </Box>
    </Box >
  )
}
