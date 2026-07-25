import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@mui/material';
import useAuthStore from '../../Store/useAuthStore';
export default function Navbar() {
  const token = useAuthStore((state) => state.token)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: '#009688' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            KASHOP
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2 }} >
            <Link component={RouterLink} to={'/'} color="inherit" underline='none'>Home</Link>
            <Link component={RouterLink} to={'/catergory'} color="inherit" underline='none'>Category</Link>
            {!token && (
              <>
                <Link component={RouterLink} to={'/login'} color="inherit" underline='none'>Login</Link>
                <Link component={RouterLink} to={'/register'} color="inherit" underline='none'>Register</Link>
              </>
            )}
            {token && (
              <>
                <Link component={RouterLink} to={'/cart'} color="inherit" underline='none' >Cart</Link>
                <Link component={RouterLink} to={'/logout'} color="inherit" underline='none'>Logout</Link>
              </>
            )}

          </Box>

          <IconButton sx={{ display: { xs: 'flex', sm: 'none' } }} color="inherit">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
