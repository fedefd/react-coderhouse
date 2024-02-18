import { useEffect } from "react";
import { products } from "../../../productsMock";

const ItemDetailContainer = () => {
  let id = 1;

  useEffect(() => {
    // lo mismo q el itemList
    //guardar en un estado el objeto del producto
  }, [id]);

  return <div>ItemDetailContainer</div>;
};

export default ItemDetailContainer;
