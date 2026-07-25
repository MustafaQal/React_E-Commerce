import { Box, TextField, Typography, Button, CircularProgress, Card, CardContent, Stack } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm } from 'react-hook-form'
import loginSchema from '../../../components/Validation/loginSchema';
import useAuthStore from '../../../Store/useAuthStore';
import { useNavigate } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
export default function Login() {

  const setToken = useAuthStore((state) => state.setToken);
  const navigate = useNavigate();
  const [serverErr, setServerErr] = useState([]);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({ resolver: yupResolver(loginSchema), mode: 'onBlur' });
  const loginForm = async (values) => {
    //console.log(value);
    try {
      const response = await axios.post('https://knowledgeshop.runasp.net/api/auth/Account/Login', values);
      console.log(response.data);
      if (response.status === 200) {
        setToken(response.data.accessToken);
        navigate('/')
        //localStorage.setItem("accessToken", response.data.accessToken)
      }
    } catch (error) {
      setServerErr(error.response.data.errors);
      console.log(error.response.data.errors);
    }
  }


  return (
    <Box component="section" className="login_form" sx={{minHeight: "70vh", display: "flex", justifyContent: "center", 
    alignItems: "center", py: 5,}}>
      <Stack spacing={3} alignItems="center" >
        <Card elevation={4} sx={{ width: "100%", maxWidth: 450, borderRadius: 4, }}>
          <CardContent sx={{ p: 5 }}>
            <Stack spacing={3} alignItems="center">
              <LoginIcon sx={{ fontSize: 70, color: "success.main", }} />
              <Typography variant='h4' fontWeight="bold" textAlign="center"> Login </Typography>
              <Typography color="text.secondary" textAlign="center">
                Welcome back! Please login to your account
              </Typography>

<Box component="form" sx={{width: "100%", py: 2, }}
  onSubmit={handleSubmit(loginForm)}
>

                <Stack spacing={2.5} width="100%">

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
                    {isSubmitting ? (<CircularProgress size={24} color="inherit" />) : ("Login")}
                  </Button>
                </Stack>
              </Box>
            </Stack>
          </CardContent>
        </Card>
      </Stack>

    </Box >
  )
}
