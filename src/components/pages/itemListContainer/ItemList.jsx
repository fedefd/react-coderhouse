import { Link } from "react-router-dom";

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
      <div>
        <h2>Seleccione una categoría:</h2>
        <Link to="/category/calzados">
          <button>Calzados</button>
        </Link>
        <Link to="/category/ropa">
          <button>Ropa</button>
        </Link>
      </div>
    </div>
  );
};

export default ItemList;
