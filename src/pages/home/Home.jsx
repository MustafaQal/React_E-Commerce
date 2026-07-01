import { Box, Typography } from '@mui/material'
import React from 'react'
import Categories from '../../components/Categories/Categories'
import Children from '../../components/Children/Children'

export default function Home() {
  const probs = 33;
  return (
    <div>
      <Categories />

      <Children test={probs}>
        <Box>
          <h2> This is Home Children </h2>
          <p> Hello! Mustafa</p>
        </Box>
      </Children>
    </div>
  )
}
