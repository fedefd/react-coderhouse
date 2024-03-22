import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const { getTotalItems } = useContext(CartContext);

  let totalItems = getTotalItems();

  return (
    <div>
      <FaShoppingCart color="white" size="23px" />
      <span
        style={{
          position: "absolute",
          margin: "1px",
          marginLeft: "4px",
          fontSize: ".8rem",
          fontWeight: "700",
          color: "white",
          borderRadius: "50%",
          border: "1px solid white",
          backgroundColor: "black",
          padding: "3px",
        }}
      >
        {totalItems}
      </span>
    </div>
  );
};

export default CartWidget;
