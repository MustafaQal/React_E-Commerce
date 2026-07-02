import { Badge, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useBadge } from "../../Store/useBadge";

export default function CartBadge() {
  const badge = useBadge((state) => state.badge);

  return (
    <IconButton>
      <Badge badgeContent={badge} color="error">
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
}