import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Cart = ({
  cart,
  removeById,
  totalPrice,
  botonAtras,
  limpiarConAlerta,
}) => {
  return (
    <div>
      {cart.map((product) => (
        <div key={product.id} style={{ border: "1px solid black" }}>
          <h2>nombre: {product.name}</h2>
          <h3>cantidad: {product.quantity}</h3>
          <h3>precio: $ {product.price * product.quantity} </h3>
          <button onClick={() => removeById(product.id)}>Eliminar</button>
        </div>
      ))}

      {cart.length > 0 ? (
        <>
          <h2>el total a pagar es: $ {totalPrice} </h2>
          <div>
            <Button variant="contained" onClick={botonAtras}>
              Volver
            </Button>
            <Link to="/checkout">
              <Button variant="contained">terminar compra</Button>
            </Link>
            <Button variant="contained" onClick={limpiarConAlerta}>
              Limpiar Carrito
            </Button>
          </div>
        </>
      ) : (
        <div>
          <Button variant="contained" onClick={botonAtras}>
            Volver
          </Button>
          <Link to="/products">
            <Button variant="contained">Agrega productos</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
