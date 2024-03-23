import { useParams, useNavigate } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import CircularLoader from "../../common/circularLoader/CircularLoader";
import Swal from "sweetalert2";
import { db } from "../../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  const { addToCart, getTotalQuantityById } = useContext(CartContext);

  const initial = getTotalQuantityById(id);

  useEffect(() => {
    setIsLoading(true);
    let productsCollection = collection(db, "products");
    let refDoc = doc(productsCollection, id);
    getDoc(refDoc)
      .then((res) => {
        setItem({ ...res.data(), id: res.id });
      })
      .finally(setIsLoading(false));
  }, [id]);

  const onAdd = (cantidad) => {
    let infoProducto = {
      ...item,
      quantity: cantidad,
    };
    addToCart(infoProducto);
    Swal.fire({
      position: "center",
      icon: "success",
      title: `agregaste ${cantidad} producto/s al carrito!`,
      showConfirmButton: false,
      timer: 1200,
    });
  };

  const irAlCarrito = () => {
    // navegar al carrito
    navigate("/cart");
  };

  if (isLoading) {
    return <CircularLoader />;
  }
  return (
    <>
      {item && (
        <ItemDetail
          irAlCarrito={irAlCarrito}
          item={item}
          onAdd={onAdd}
          initial={initial}
        />
      )}
    </>
  );
};

export default ItemDetailContainer;
