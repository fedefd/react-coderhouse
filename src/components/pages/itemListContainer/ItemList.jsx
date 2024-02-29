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
        <Link to="/category/Libros">
          <button>Libros</button>
        </Link>
        <Link to="/category/dispositivos-electronicos">
          <button>Dispositivos Electronicos</button>
        </Link>
        <Link to="/category/merchadising-literario">
          <button>Merchadising Literario</button>
        </Link>
        <Link to="/category/material-papeleria">
          <button>Material de Papeleria</button>
        </Link>
        <Link to="/category/juegos-de-mesa">
          <button>Juegos de Mesa</button>
        </Link>
      </div>
    </div>
  );
};

export default ItemList;
