import React from 'react'
import { Box, Typography, Card, CardContent, } from "@mui/material";
export default function DisplayCategory({category}) {
    return (
        <Box sx={{ py: 3 }}>
            <Card sx={{ borderRadius: 3, transition: "0.5s", "&:hover": { boxShadow: 8 } }}>
                <CardContent>
                    <Typography variant="h6" fontWeight={600}> {category.name} </Typography>
                </CardContent>
            </Card>
        </Box>
    )
}
