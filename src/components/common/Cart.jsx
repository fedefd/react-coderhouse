import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();

  const botonAtras = () => {
    navigate(-1);
  };
  return (
    <>
      <div>Cart</div>
      <button onClick={botonAtras}>Volver</button>
    </>
  );
};

export default Cart;
