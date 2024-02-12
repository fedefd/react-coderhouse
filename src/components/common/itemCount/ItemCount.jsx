const ItemCount = ({ counter, addOne, subOne }) => {
  return (
    <>
      <button onClick={addOne}>sumar</button>
      <h4>{counter}</h4>
      <button onClick={subOne} disabled={counter === 1 ? true : false}>
        restar
      </button>
      <button>agregar al carrito</button>
    </>
  );
};

export default ItemCount;
