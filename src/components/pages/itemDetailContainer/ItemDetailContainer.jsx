import { useParams, useNavigate } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { useContext, useEffect, useState } from "react";
import { getProduct } from "../../../asyncMock";
import { CartContext } from "../../context/CartContext";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    getProduct(+id).then((resp) => {
      setItem(resp);
      setIsLoading(false);
    });
  }, [id]);

  const onAdd = (cantidad) => {
    let infoProducto = {
      ...item,
      quantity: cantidad,
    };
    addToCart(infoProducto);

    // navegar al carrito
    navigate("/cart");
  };

  return (
    <>
      {isLoading ? (
        <h2>Cargando producto..</h2>
      ) : (
        item && <ItemDetail item={item} onAdd={onAdd} />
      )}
    </>
  );
};

export default ItemDetailContainer;
