import { Box, TextField, Typography, Button, CircularProgress } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm } from 'react-hook-form'
import loginSchema from '../../../components/Validation/loginSchema';

export default function Login() {

  const [serverErr, setServerErr] = useState([]);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({ resolver: yupResolver(loginSchema), mode: 'onBlur' });
  const loginForm = async (values) => {
    //console.log(value);
    try {
      const response = await axios.post('https://knowledgeshop.runasp.net/api/auth/Account/Login', values);
      console.log(response.data);
      if(response.status === 200){
        localStorage.setItem("accessToken", response.data.accessToken)
      }
    } catch (error) {
      setServerErr(error.response.data.errors);
      console.log(error.response.data.errors);
    }
  }


  return (
    <Box component={'section'} className='login_form' sx={{ py: 5, pb: 5 }}>
      <Typography component={'h1'} variant='h2' py={3}> Login </Typography>
      <Box component="form" sx={{
        display: 'flex', flexDirection: 'column', gap: 2, py: 5,
        alignItems: 'center'
      }}
        onSubmit={handleSubmit(loginForm)}
      >

        {serverErr.length > 0 && (
          <Box sx={{ width: "100%", bgcolor: "#f5bac3", color: "error.main", p: 2, borderRadius: 1, mb: 2 }}>
            {serverErr.map((err) => <Typography> {err} </Typography>)}
          </Box>
        )}
        <TextField {...register("email")} fullWidth label="Email" variant="outlined"
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <TextField type="password" {...register("password")} fullWidth label="Password" variant="outlined"
          error={errors.password}
          helperText={errors.password?.message}
        />
        <Button variant="contained" sx={{ bgcolor: '#009688' }} type='submit' disabled={isSubmitting}>
          {isSubmitting? (<CircularProgress size={24} color="inherit"/> ) : ("Login")}
        </Button>
      </Box>
    </Box >
  )
}
