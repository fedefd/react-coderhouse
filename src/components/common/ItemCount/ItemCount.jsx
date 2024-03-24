import { Button, IconButton } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import "./ItemCount.css";

const ItemCount = ({ counter, addOne, subOne, onAdd, irAlCarrito }) => {
  return (
    <div>
      <div className="itemCount">
        <Button
          variant="contained"
          color="primary"
          onClick={subOne}
          disabled={counter === 1}
          className="itemCountButton"
        >
          -
        </Button>
        <h4 style={{ marginRight: "10px" }}>{counter}</h4>
        <Button
          variant="contained"
          color="primary"
          onClick={addOne}
          className="itemCountButton"
        >
          +
        </Button>
      </div>
      <div className="addToCartWrapper">
        <Button
          variant="contained"
          color="primary"
          onClick={() => onAdd(counter)}
        >
          Agregar al carrito
        </Button>
      </div>
      <div className="seeCart">
        <IconButton color="primary" onClick={irAlCarrito}>
          Ver Carrito
          <ShoppingCart color="red" />
        </IconButton>
      </div>
    </div>
  );
};

export default ItemCount;
