import {
  Box,
  Typography,
  CircularProgress,
  Alert,
  Button,
} from "@mui/material";

import useCart from "../../hooks/useCart";
import Children from "../../components/Children/Children";
import { useCounterStore } from "../../Store/useCounterStore";

export default function Cart() {
  const { data, isLoading, isError, error } = useCart();

  //Children Test
  const carts1 = 34;

  //Zustand:
  const counter = useCounterStore((state) => state.counter);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);

  if (isLoading) return <CircularProgress />;
  if (isError)
    return <Alert severity="error">{error.message}</Alert>;
  //console.log(data);//Mustafa: items


  return (
    <Box sx={{ py: 5 }}>
      <Typography variant="h2" mb={4}> My Cart </Typography>
      {/* Mustafa: test Zustand */}
      <h2>Zustand test: {counter} </h2>
      <Button variant="contained" onClick={increment} sx={{ mr: 2 }} >
        +
      </Button>

      <Button variant="outlined" onClick={decrement} >
        -
      </Button>

      {data.items.length === 0 ? (
        <Typography sx={{ pt: 4 }}>Your cart is empty.</Typography>
      ) : (data.items.map((item) => (
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