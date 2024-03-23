import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebaseConfig";
import { products } from "./asyncMock";

const AgregarDocs = () => {
  const rellenardb = () => {
    let productsCollection = collection(db, "products");

    products.forEach((product) => {
      addDoc(productsCollection, product);
    });
  };

  return (
    <div>
      <button onClick={rellenardb}>agregar documentos</button>
    </div>
  );
};

export default AgregarDocs;
