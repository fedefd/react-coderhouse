import { useState } from "react";
import ItemCount from "./ItemCount";

import Swal from "sweetalert2";

const ItemCountContainer = ({ stock, onAdd, initial = 1, irAlCarrito }) => {
  const [counter, setCounter] = useState(initial);

  const addOne = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    } else {
      Swal.fire({
        icon: "warning",
        title: "no puedes agregar mas",
        text: "no hay mas unidades en stock",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const subOne = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  return (
    <ItemCount
      stock={stock}
      addOne={addOne}
      subOne={subOne}
      counter={counter}
      onAdd={onAdd}
      initial={initial}
      irAlCarrito={irAlCarrito}
    />
  );
};

export default ItemCountContainer;
