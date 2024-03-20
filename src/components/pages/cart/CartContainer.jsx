import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { Button } from "@mui/material";

const CartContainer = () => {
  const { cart, clearCart, removeById } = useContext(CartContext);

  const navigate = useNavigate();

  const botonAtras = () => {
    navigate(-1);
  };

  return (
    <>
      {cart.map((product) => (
        <div key={product.id} style={{ border: "1px solid black" }}>
          <h2>nombre: {product.name}</h2>
          <h3>cantidad: {product.quantity}</h3>
          <button onClick={() => removeById(product.id)}>Eliminar</button>
        </div>
      ))}

      <Button variant="contained" onClick={botonAtras}>
        Volver
      </Button>

      <Link to="/checkout">
        <Button variant="contained">terminar compra</Button>
      </Link>

      <Button variant="contained" onClick={clearCart}>
        Limpiar Carrito
      </Button>
    </>
  );
};

export default CartContainer;
