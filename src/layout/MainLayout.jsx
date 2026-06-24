import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import { Container } from '@mui/material'

export default function MainLayout() {
    return (
        <div>
            <Navbar />
            <Container p={5}>
                <Outlet />
            </Container>
            <Footer />
        </div>
    )
}
