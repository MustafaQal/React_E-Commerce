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
import CartBadge from "../../components/BadgeIcon/BadgeIcon";
import { useBadge } from "../../Store/useBadge";
import CartBadge10 from "../../components/BadgeIcon/BadgeIcon10";

export default function Cart() {
  const { data, isLoading, isError, error } = useCart();

  //Children Test
  const carts1 = 34;

  //Zustand:
  const counter = useCounterStore((state) => state.counter);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);

  const badge = useBadge ((state) => state.badge);
  const badge10 = useBadge ((state)=> state.increaseby10);
  const badge_10 = useBadge ((state)=> state.decreaseby10);

  if (isLoading) return <CircularProgress />;
  if (isError)
    return <Alert severity="error">{error.message}</Alert>;
  //console.log(data);//Mustafa: items


  return (
    <Box sx={{ py: 5 }}>
      <Typography variant="h2" mb={4}> My Cart </Typography>

      <Box size={{sx: 12, ms:6, lg: 4 }} >     
        <Box> 
          {/* Mustafa: test Zustand */}
      <h2>Zustand test: {counter} </h2>

      <CartBadge > Zustand Badge: {counter}</CartBadge>

      <Button variant="contained" onClick={increment} sx={{ mr: 2 }} >
        +
      </Button>

      <Button variant="outlined" onClick={decrement} >
        -
      </Button> 

        </Box>
        
      <Box>
          {/* Mustafa: badge +10 test  */}
      <h2> Badge test: {badge} </h2>
      <CartBadge10> Badge test: {badge} </CartBadge10>

      <Button variant="contained" onClick={badge10} sx={{ mr: 2 }} >
        +
      </Button>

      <Button variant="outlined" onClick={badge_10} >
        -
      </Button> 

        </Box>

      </Box>




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