import ItemList from "./ItemList";
import { products } from "../../../productsMock";
import { useEffect, useState } from "react";
const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  // useEffect(() => {
  //   console.log("peticion a un server");
  // }, []);
  // console.log("se actualiza el componente");

  useEffect(() => {
    //creamos o solicitamos
    // const tarea = fetch.("api") el backend resuelve el resolve y el reject
    const tarea = new Promise((resolve, reject) => {
      // resolve si se cumple la promesa, reject si no se cumple
      resolve(products);
      reject("error, algo salio mal");
    });

    //manejar la promesa cuando viene bien(.then) y cuando viene mal(.catch)      el parametro del .then va a ser lo que tenga adentro el resolve, y el par del .catch lo q tenga adentro el reject
    tarea
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <ItemList items={items} />
    </>
  );
};

export default ItemListContainer;
