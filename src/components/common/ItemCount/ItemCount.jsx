import { FaShoppingCart } from "react-icons/fa";

const ItemCount = ({ counter, addOne, subOne, onAdd, irAlCarrito }) => {
  return (
    <>
      <button onClick={addOne}>+</button>
      <h4>{counter}</h4>
      <button onClick={subOne} disabled={counter === 1 ? true : false}>
        -
      </button>
      <button onClick={() => onAdd(counter)}>agregar al carrito</button>

      <button onClick={irAlCarrito}>
        <FaShoppingCart color="red" size="10px" />
      </button>
    </>
  );
};

export default ItemCount;
