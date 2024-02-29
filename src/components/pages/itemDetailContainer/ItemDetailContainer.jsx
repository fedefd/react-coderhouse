import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import { getProduct } from "../../../asyncMock";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const [item, setItem] = useState(null);
  //const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProduct(id).then((resp) => setItem(resp));
  }, []);

  return <div>{item & <ItemDetail {...item} />}</div>;
};

export default ItemDetailContainer;
