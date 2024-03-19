import { useParams, useNavigate } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import { getProduct } from "../../../asyncMock";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

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
    console.log(infoProducto);

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
