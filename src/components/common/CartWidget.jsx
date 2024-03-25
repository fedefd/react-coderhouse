import { useContext } from "react";
import { ShoppingCartOutlined } from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const { getTotalItems } = useContext(CartContext);

  let totalItems = getTotalItems();

  return (
    <div>
      <Badge
        badgeContent={totalItems}
        color="warning"
        overlap="circular"
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        style={{ marginRight: "8px" }}
      >
        <ShoppingCartOutlined style={{ color: "white", fontSize: "30px" }} />
      </Badge>
    </div>
  );
};

export default CartWidget;
