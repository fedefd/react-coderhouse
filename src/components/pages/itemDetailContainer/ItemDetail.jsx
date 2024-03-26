import ItemCountContainer from "../../common/ItemCount/ItemCountContainer";
import { Card, CardContent, Typography } from "@mui/material";
import "./ItemDetail.css";

const ItemDetail = ({ item, onAdd, initial, irAlCarrito }) => {
  return (
    <>
      <div className="itemDetailWrapper">
        <Card className="itemCard">
          <CardContent>
            <Typography variant="h6" component="h2">
              {item.name}
            </Typography>
            <img src={item.img} alt={item.name} className="itemCardImg" />
            <Typography
              variant="body1"
              color="text.secondary"
              className="itemCardPrice"
            >
              {item.price.toLocaleString("es-AR", {
                style: "currency",
                currency: "ARS",
                minimumFractionDigits: 0,
              })}
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              className="itemCardStock"
            >
              En stock: {item.stock}
            </Typography>
          </CardContent>

          <div>
            {initial && (
              <h3 className="itemCardTextShow">
                ya tienes {initial} en el carrito!{" "}
              </h3>
            )}
            <ItemCountContainer
              stock={item.stock}
              onAdd={onAdd}
              initial={initial}
              irAlCarrito={irAlCarrito}
            />
          </div>
        </Card>
        <div className="itemDetails">
          <p>{item.detail}</p>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
