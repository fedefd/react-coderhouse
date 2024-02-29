import { useEffect, useState } from "react";
import { getProducts } from "../../../asyncMock";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getProducts().then((resp) => {
      // verificar si existe la categoria en el parametro
      if (category) {
        const productsFilter = resp.filter(
          //guarda el producto por categoria
          (product) => product.category === category
        );

        setProducts(productsFilter);
      } else {
        //si no hay categoria se almacenan todos los productos
        setProducts(resp);
      }

      setIsLoading(false);
      console.log(resp);
    });
  }, [category]);

  return (
    <>{isLoading ? <h2>Cargando...</h2> : <ItemList products={products} />}</>
  );
};

export default ItemListContainer;
