const ItemCount = ({ counter, addOne, subOne, onAdd }) => {
  return (
    <>
      <button onClick={addOne}>+</button>
      <h4>{counter}</h4>
      <button onClick={subOne} disabled={counter === 1 ? true : false}>
        -
      </button>
      <button onClick={() => onAdd(counter)}>agregar al carrito</button>
    </>
  );
};

export default ItemCount;
