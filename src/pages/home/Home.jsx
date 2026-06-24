import { Typography } from '@mui/material'
import React from 'react'

export default function Home() {
  return (
    <div>
      <h2> this is tage h2</h2>
      <Typography component={'h2'} variant='h1' sx={{backgroundColor: '#ff8a65'}}> Home </Typography>
      <Typography component={'h2'} variant='h2' bgcolor={'teal'} p={2}> Home </Typography>
      <Typography component={'h2'} variant='h3'> Home </Typography>
      <Typography component={'h2'} variant='h4'> Home </Typography>
      <Typography component={'h2'} variant='h5'> Home </Typography>
      <Typography component={'h2'} variant='h6'> Home </Typography>
      <Typography> This is a pargraph</Typography>
    </div>
  )
}
