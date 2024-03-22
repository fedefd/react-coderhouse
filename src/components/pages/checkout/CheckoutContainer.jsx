import Checkout from "./Checkout";
import { useFormik } from "formik";
import * as yup from "yup";
import Swal from "sweetalert2";

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

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (data) => {
      console.log(data);
    },
    validationSchema: yup.object({
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

  console.log(errors);
  return (
    <Checkout
      errors={errors}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
    />
  );
};

export default CheckoutContainer;
