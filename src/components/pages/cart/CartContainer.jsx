import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { Button } from "@mui/material";
import Swal from "sweetalert2";

const CartContainer = () => {
  const { cart, clearCart, removeById, getTotalPrice } =
    useContext(CartContext);

  let totalPrice = getTotalPrice();

  const navigate = useNavigate();

  const botonAtras = () => {
    navigate(-1);
  };

  const limpiarConAlerta = () => {
    Swal.fire({
      title: "seguro quieres limpiar el carrito?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Si, limpiar",
      denyButtonText: `No, dejalo como estaba`,
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("se limpio el carrito!", "", "success");
      } else if (result.isDenied) {
        return;
      }
    });
  };

  return (
    <>
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
    </>
  );
};

export default CartContainer;
