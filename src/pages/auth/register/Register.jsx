import { Box, TextField, Typography, Button } from '@mui/material'
import React from 'react'

export default function Register() {
  return (
    <Box component={'section'} className='register_form' sx={{ py: 5, pb: 5 }}>
      <Typography component={'h1'} variant='h1' py={3}> Register </Typography>
      <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2, py: 5, 
        alignItems: 'center' }}>

        <TextField fullWidth label="Full Name" variant="outlined" />
        <TextField fullWidth label="Email" variant="outlined" />
        <TextField fullWidth label="UserName" variant="outlined" />
        <TextField fullWidth label="Password" variant="outlined" />
        <TextField fullWidth label="Phone Number" variant="outlined" />
        <Button variant="contained"  sx={{bgcolor: '#009688'}} type='submit'>Register</Button>

      </Box>
    </Box >
  )
}
