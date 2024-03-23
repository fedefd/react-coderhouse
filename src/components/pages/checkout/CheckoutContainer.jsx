import Checkout from "./Checkout";
import { useFormik } from "formik";
import * as yup from "yup";
import Swal from "sweetalert2";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";

const CheckoutContainer = () => {
  // const [userInfo, setUserInfo] = useState({
  //   email: "",
  //   password: "",
  //   confirmPassword: "",
  // });

  // const envioDeFormulario = (event) => {
  //   event.preventDefault(); // para que se envie el form sin que se actualice la pagina
  //   console.log("se envio el formulario");
  //   console.log(userInfo);
  // };

  // const capturar = (e) => {
  //   setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  //   console.log(e);
  // };

  const { cart, getTotalPrice, clearCart } = useContext(CartContext);
  let totalPrice = getTotalPrice();
  const [orderId, setOrderId] = useState(null);
  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (data) => {
      if (!cart || cart.length === 0) {
        console.error("El carrito está vacío");
        return;
      }

      if (
        typeof totalPrice !== "number" ||
        isNaN(totalPrice) ||
        totalPrice <= 0
      ) {
        console.error("El precio total del carrito no es válido");
        return;
      }

      let order = {
        buyer: data,
        items: cart,
        total: totalPrice,
      };

      let ordersCollection = collection(db, "orders");
      addDoc(ordersCollection, order).then((res) => setOrderId(res.id));

      cart.forEach((product) => {
        let refDoc = doc(db, "products", product.id);
        updateDoc(refDoc, { stock: product.stock - product.quantity });
      });
      clearCart();
    },
    validationSchema: yup.object({
      name: yup.string().required("Campo requerido"),
      phone: yup
        .number("ingresa un numero de teléfono válido")
        .moreThan(7, "El teléfono debe tener mas de 8 dígitos")
        .required("Campo requerido")
        .positive("El teléfono debe ser un número positivo")
        .integer("El teléfono debe ser un número entero")
        .typeError("El teléfono debe ser un número"),
      email: yup
        .string()
        .required("Campo requerido")
        .email("ingresa un email válido"),
      password: yup
        .string()
        .required("Campo requerido")
        .min(4, "la contraseña debe tener un mínimo de 4 caracteres"),
      confirmPassword: yup
        .string()
        .required("Campo requerido")
        .min(4, "la contraseña debe tener un mínimo de 4 caracteres")
        .test("passwords-match", "La contraseña no coincide", function (value) {
          const passwordsMatch = this.parent.password === value;
          if (!passwordsMatch) {
            Swal.fire({
              icon: "error",
              text: "La contraseña no coincide",
              timer: 700,
            });
          }
          return passwordsMatch;
        }),
    }),
    validateOnChange: false,
  });

  return (
    <Checkout
      errors={errors}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      orderId={orderId}
    />
  );
};

export default CheckoutContainer;
