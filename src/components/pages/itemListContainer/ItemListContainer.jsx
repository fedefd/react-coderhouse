import { useState, useEffect } from "react";
import ItemList from "./ItemList";

const ItemListContainer = ({ greeting }) => {
  // peticion a la api
  // useState
  // funciones
  // variables
  //const [items, setItems] = useState([]);

  const [nombre, setNombre] = useState("pp");
  const [apellido, setApellido] = useState("perez");

  const saludar = () => {
    setNombre("pepe");
  };

  const saludar2 = () => {
    setNombre("pp");
  };

  useEffect(() => {
    console.log("se hace la peticion dentro del effect");
    // el use effect es para que se ejecute una vez durante la renderizacion inicial del componente
  }, []); // array de dependencias
  console.log("se hace la peticion por fuera del effect");

  useEffect(() => {
    console.log(
      "se hace la peticion dentro del effect solo si la variable se llama"
    );
  }, [apellido]); // se ejecuta nada mas cuando cambie esa variable. se llama array de dependencias porque depende de la variable que se ejecute ahi adentro

  return (
    <>
      <ItemList
        greeting={greeting}
        nombre={nombre}
        saludar={saludar}
        saludar2={saludar2}
      />
      <h3>{apellido}</h3>
      <button onClick={() => setApellido("lopez")}>cambiar</button>
      <button onClick={() => setApellido("perez")}>cambiar2</button>
    </>
  );
};

export default ItemListContainer;
