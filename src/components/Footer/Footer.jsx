import { Box, Typography} from '@mui/material'
import React from 'react'

export default function Footer() {

  return (

    <Box>
      <Box
        component="footer"
        sx={{
          bgcolor: "#009688",
          color: "white",
          textAlign: "center",
          py: 2,
        }}
      >
        <Typography>
          © 2026 KASHOP. All rights reserved.
        </Typography>
      </Box>

    </Box>
  )
}
