import { useState } from "react";
import Checkout from "./Checkout";

const CheckoutContainer = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    lastName: "",
    email: "",
  });

  const envioDeFormulario = (event) => {
    event.preventDefault(); // para que se envie el form sin que se actualice la pagina
    console.log("se envio el formulario");
    console.log(userInfo);
  };

  const capturar = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    console.log(e);
  };

  return <Checkout envioDeFormulario={envioDeFormulario} capturar={capturar} />;
};

export default CheckoutContainer;
