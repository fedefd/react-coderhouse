import ItemCountContainer from "../../common/ItemCount/ItemCountContainer";

const ItemDetail = ({ item, onAdd }) => {
  console.log(item);
  return (
    <>
      <div>
        <h2>{item.name}</h2>
        <p>Precio: ${item.price}</p>
        <p>Stock: {item.stock}</p>
      </div>
      <div>
        <ItemCountContainer stock={item.stock} onAdd={onAdd} />
      </div>
    </>
  );
};

export default ItemDetail;
