import { useState } from "react";
import ItemCount from "./ItemCount";

const ItemCountContainer = ({ stock }) => {
  const [counter, setCounter] = useState(1);

  const addOne = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    } else {
      alert("stock maximo");
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
    />
  );
};

export default ItemCountContainer;
