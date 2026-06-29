import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import { Box, Container } from '@mui/material'

export default function MainLayout() {
return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar />

      <Box sx={{ flex: 1 }}>  {/* Mustafa: Expand to fill the available space so the Footer stays at the bottom */}
        <Container maxWidth="lg">
        <Outlet />

        </Container>
      </Box>

      <Footer />
    </Box>

  );
}
