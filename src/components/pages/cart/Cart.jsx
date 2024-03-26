import { Button, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = ({
  cart,
  removeById,
  totalPrice,
  botonAtras,
  limpiarConAlerta,
}) => {
  const getTotalQuantity = () => {
    return cart.reduce((total, product) => total + product.quantity, 0);
  };
  return (
    <div>
      <div className="cartProductBody">
        <div className="cartProductWrapper">
          {cart.map((product) => (
            <div key={product.id} className="cartProduct">
              <CardMedia
                component="img"
                image={product.img}
                alt={product.name}
                sx={{
                  width: "100px",
                  height: "100px",
                }}
                className="cartProductImg"
              />
              <div>
                <h3
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: "600",
                    width: "350px",
                  }}
                >
                  {product.name}
                  <p style={{ fontSize: "1rem", fontWeight: "500" }}>
                    Tienes{" "}
                    <span style={{ fontSize: "1rem", fontWeight: "600" }}>
                      {product.quantity}{" "}
                    </span>
                  </p>
                </h3>
                <div className="cartProductInfo">
                  <Button
                    variant="outlined"
                    onClick={() => removeById(product.id)}
                    size="small"
                    sx={{
                      minWidth: "60px",
                      height: "30px",
                      padding: "10px",
                    }}
                  >
                    Eliminar
                  </Button>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <p>{product.stock - product.quantity} disponibles</p>
                    <Link to={`/item/${product.id}`}>
                      <Button
                        variant="outlined"
                        size="small"
                        sx={{ fontSize: ".6rem", width: "30px" }}
                      >
                        Agregar mas productos
                      </Button>
                    </Link>
                  </div>
                  <p className="cartProductPrice">
                    {(product.price * product.quantity).toLocaleString(
                      "es-AR",
                      {
                        style: "currency",
                        currency: "ARS",
                        minimumFractionDigits: 0,
                      }
                    )}{" "}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {cart.length > 0 ? (
          <div className="cartSummary">
            <h5 style={{ alignSelf: "center" }}>Resumen de compra</h5>
            <p>Productos ({getTotalQuantity()}) </p>
            <div className="cartSummaryPrice">
              <p>Total </p>{" "}
              <p>
                {totalPrice.toLocaleString("es-AR", {
                  style: "currency",
                  currency: "ARS",
                  minimumFractionDigits: 0,
                })}
              </p>
            </div>
            <Link to="/checkout" style={{ alignSelf: "center" }}>
              <Button variant="contained">Continuar con la compra</Button>
            </Link>
          </div>
        ) : (
          <></>
        )}
      </div>

      {cart.length > 0 ? (
        <>
          <h2>el total a pagar es: $ {totalPrice} </h2>
          <div>
            <Button variant="contained" onClick={botonAtras}>
              Volver
            </Button>

            <Button variant="contained" onClick={limpiarConAlerta}>
              Limpiar Carrito
            </Button>
          </div>
        </>
      ) : (
        <div>
          <div>
            <h3>Tu carrito está vacio!</h3>
          </div>
          <Button variant="contained" onClick={botonAtras}>
            Volver
          </Button>
          <Link to="/products">
            <Button variant="contained">Agrega productos</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
