import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = ({
  cart,
  removeById,
  totalPrice,
  botonAtras,
  limpiarConAlerta,
}) => {
  return (
    <div>
      <div className="cartProductBody">
        <div className="cartProductWrapper">
          {cart.map((product) => (
            <div key={product.id} className="cartProduct">
              <h2>nombre: {product.name}</h2>
              <h3>cantidad: {product.quantity}</h3>
              <h3>precio: $ {product.price * product.quantity} </h3>
              <button onClick={() => removeById(product.id)}>Eliminar</button>
            </div>
          ))}
        </div>
        <div>Resumen de compra</div>
      </div>

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
          <div>
            <h3>Tu carrito está vacio!</h3>
          </div>
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
