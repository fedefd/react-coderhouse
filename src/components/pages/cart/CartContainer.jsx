import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

import Swal from "sweetalert2";
import Cart from "./Cart";

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
      <Cart
        cart={cart}
        removeById={removeById}
        totalPrice={totalPrice}
        botonAtras={botonAtras}
        limpiarConAlerta={limpiarConAlerta}
      />
    </>
  );
};

export default CartContainer;
