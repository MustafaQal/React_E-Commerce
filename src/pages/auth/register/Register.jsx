import { Box, TextField, Typography, Button, CircularProgress } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm } from 'react-hook-form'
import registerSchema from '../../../components/Validation/registerSchema';

export default function Register() {

  const [serverErr, setServerErr] = useState([]);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({ resolver: yupResolver(registerSchema), mode: 'onBlur' });
  const registerForm = async (values) => {
    //console.log(value);
    try {
      const response = await axios.post('https://knowledgeshop.runasp.net/api/auth/Account/Register', values);
      console.log(response.data);
    } catch (error) {
      setServerErr(error.response.data.errors);
      console.log(error.response.data.errors);
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

        {serverErr.length > 0 && (
          <Box sx={{ width: "100%", bgcolor: "#f5bac3", color: "error.main", p: 2, borderRadius: 1, mb: 2 }}>
            {serverErr.map((err) => <Typography> {err} </Typography>)}
          </Box>
        )}

        <TextField {...register("fullName")} fullWidth label="Full Name" variant="outlined"
          helperText={errors.fullName?.message}
        />
        <TextField {...register("email")} fullWidth label="Email" variant="outlined"
          helperText={errors.email?.message}
        />
        <TextField {...register("userName")} fullWidth label="UserName" variant="outlined"
          helperText={errors.userName?.message}
        />
        <TextField type="password" {...register("password")} fullWidth label="Password" variant="outlined"
          helperText={errors.password?.message}
        />
        <TextField {...register("phoneNumber")} fullWidth label="Phone Number" variant="outlined"
          helperText={errors.phoneNumber?.message}
        />
        <Button variant="contained" sx={{ bgcolor: '#009688' }} type='submit' disabled={isSubmitting}
>
          {isSubmitting ? (<CircularProgress size={24} color="inherit" /> ) : ("Register")}
        </Button>
      </Box>
    </Box >
  )
}
