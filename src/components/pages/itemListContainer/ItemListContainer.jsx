import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import CircularLoader from "../../common/CircularLoader/CircularLoader";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    let productsCollection = collection(db, "products");

    let consulta;
    if (category) {
      let productsCollectionFiltered = query(
        productsCollection,
        where("category", "==", category)
      );
      consulta = productsCollectionFiltered;
    } else {
      consulta = productsCollection;
    }

    getDocs(consulta)
      .then((res) => {
        let arrayDesencriptado = res.docs.map((elemento) => {
          return { ...elemento.data(), id: elemento.id };
        });
        setProducts(arrayDesencriptado);
      })
      .finally(() => setIsLoading(false));

    // setIsLoading(true);
    // getProducts().then((resp) => {
    //   // verificar si existe la categoria en el parametro
    //   if (category) {
    //     const productsFilter = resp.filter(
    //       //guarda el producto por categoria
    //       (product) => product.category === category
    //     );
    //     setProducts(productsFilter);
    //   } else {
    //     //si no hay categoria se almacenan todos los productos
    //     setProducts(resp);
    //   }
    //   setIsLoading(false);
    //   console.log(resp);
    // });
  }, [category]);

  return (
    <>{isLoading ? <CircularLoader /> : <ItemList products={products} />}</>
  );
};

export default ItemListContainer;
