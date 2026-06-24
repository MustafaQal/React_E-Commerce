import { Box, TextField, Typography, Button } from '@mui/material'
import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'

export default function Register() {

    const {register,handleSubmit} = useForm({});
    const registerForm = async (values)=> {
      //console.log(value);
      try{
        const response = await axios.post('https://knowledgeshop.runasp.net/api/auth/Account/Register',values);
      console.log(response.data);
      } catch(error){
          console.log(error.response?.data);
      }
    }

  return (
    <Box component={'section'} className='register_form' sx={{ py: 5, pb: 5 }}>
      <Typography component={'h1'} variant='h1' py={3}> Register </Typography>
      <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2, py: 5, 
        alignItems: 'center' }}
        onSubmit={handleSubmit(registerForm)}
        >

        <TextField {...register("fullName")} fullWidth label="Full Name" variant="outlined" />
        <TextField {...register("email")} fullWidth label="Email" variant="outlined" />
        <TextField {...register("userName")} fullWidth label="UserName" variant="outlined" />
        <TextField {...register("password")} fullWidth label="Password" variant="outlined" />
        <TextField {...register("phoneNumber")} fullWidth label="Phone Number" variant="outlined" />
        <Button variant="contained"  sx={{bgcolor: '#009688'}} type='submit'>Register</Button>

      </Box>
    </Box >
  )
}
