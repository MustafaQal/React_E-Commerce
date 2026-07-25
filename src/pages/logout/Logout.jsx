import React from "react";
import { Box, Button, Card, CardContent, Link, Grid, Stack, Typography, } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../Store/useAuthStore";


export default function Logout() {

    const removeTokem = useAuthStore((state) => state.logout);
    const navigate = useNavigate();
    const handleLogout = () => {
        removeTokem();
        navigate("/login");
    };

    const handleCancel = () => {
        navigate(-1);
    };

    return (
        <Box sx={{ minHeight: "70vh", display: "flex", justifyContent: "center", alignItems: "center", px: 2, }}>
            <Stack spacing={5}>
                <Card elevation={4} sx={{ width: "100%", maxWidth: 450, borderRadius: 4, }} >
                    <CardContent sx={{ p: 5 }}>
                        <Stack spacing={3} alignItems="center">

                            <LogoutIcon sx={{ fontSize: 70, color: "error.main", }} />

                            <Typography
                                variant="h4"
                                fontWeight="bold"
                                textAlign="center"
                            >
                                Logout
                            </Typography>

                            <Typography
                                color="text.secondary"
                                textAlign="center"
                            >
                                Are you sure you want to logout from your account?
                            </Typography>

                            <Stack
                                direction={{ xs: "column", sm: "row" }}
                                spacing={2}
                                width="100%"
                            >
                                <Button variant="outlined" startIcon={<ArrowBackIcon />} onClick={handleCancel} fullWidth>
                                    Cancel
                                </Button>

                                <Button onClick={handleLogout} variant="contained" color="error" startIcon={<LogoutIcon />} fullWidth>
                                    Logout
                                </Button>
                            </Stack>

                        </Stack>
                    </CardContent>
                </Card>

     <Box> <Typography variant="h6" gutterBottom>Mustafa: 📚 MUI Study Notes </Typography>
<Stack spacing={2}>
  <Link href="https://mui.com/material-ui/material-icons/?_gl=1*l2apes*_up*MQ..*_ga*MTE5MjUyNjYzNi4xNzg0OTgxODQw*_ga_5NXDQLC2ZK*czE3ODQ5ODE4MzkkbzEkZzAkdDE3ODQ5ODIwNjckajYwJGwwJGgw" target="_blank" underline="hover" >Material Icons
 </Link> 
 <Link href="https://mui.com/material-ui/react-button/#handling-clicks" target="_blank" underline="hover"> Handling clicks </Link>
</Stack>
</Box>   
</Stack>


        </Box>
    );
}
