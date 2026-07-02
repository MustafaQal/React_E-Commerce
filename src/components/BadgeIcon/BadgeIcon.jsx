import { Badge, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCounterStore } from "../../Store/useCounterStore";

export default function CartBadge() {
  const counter = useCounterStore((state) => state.counter);

  return (
    <IconButton>
      <Badge badgeContent={counter} color="error">
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
}