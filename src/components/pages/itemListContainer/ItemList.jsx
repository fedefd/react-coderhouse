const ItemList = ({ products }) => {
  return (
    <div>
      <h2>Productos</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Precio: ${product.price}</p>
            <p>Stock: {product.stock}</p>
          </li>
        ))}
        ;
      </ul>
    </div>
  );
};

export default ItemList;
