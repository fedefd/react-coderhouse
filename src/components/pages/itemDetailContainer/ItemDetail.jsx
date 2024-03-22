import ItemCountContainer from "../../common/ItemCount/ItemCountContainer";

const ItemDetail = ({ item, onAdd, initial, irAlCarrito }) => {
  return (
    <>
      <div>
        <h2>{item.name}</h2>
        <p>Precio: ${item.price}</p>
        <p>Stock: {item.stock}</p>
      </div>
      {initial && <h3>ya tienes {initial} en el carrito </h3>}
      <div>
        <ItemCountContainer
          stock={item.stock}
          onAdd={onAdd}
          initial={initial}
          irAlCarrito={irAlCarrito}
        />
      </div>
    </>
  );
};

export default ItemDetail;
