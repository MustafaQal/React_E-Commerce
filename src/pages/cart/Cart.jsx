import {
  Box,
  Typography,
  CircularProgress,
  Alert,
} from "@mui/material";

import useCart from "../../hooks/useCart";
import Children from "../../components/Children/Children";

export default function Cart() {
  const { data, isLoading, isError, error } = useCart();
  if (isLoading) return <CircularProgress />;
  if (isError)
    return <Alert severity="error">{error.message}</Alert>;
  //console.log(data);//Mustafa: items
  const carts1=34;
  return (
    <Box sx={{ py: 5 }}>
      <Typography variant="h2" mb={4}> My Cart </Typography>
      {data.items.length === 0 ? (
        <Typography sx={{ pt: 4}}>Your cart is empty.</Typography>
      ) : ( data.items.map((item) => (
          <Box key={item.id} sx={{ p: 2, mb: 2, border: "1px solid #ddd", borderRadius: 2, }} >
            <Typography>{item.productName}</Typography>
          </Box>
        ))
      )}

      <Children test={carts1}>
        <h1> This is carts Children </h1>
      </Children>
    </Box>
  );
}