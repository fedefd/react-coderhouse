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
              $ {item.price}
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              className="itemCardStock"
            >
              Stock: {item.stock}
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
          <p>
            Kindle Paperwhite: ahora con una pantalla de 6.8” y bordes más
            delgados, luz cálida ajustable, batería de hasta 10 semanas de
            duración y cambios de página 20 % más rápidos. Hecha especialmente
            para leer: tiene una pantalla con diseño frontal a ras y sin
            reflejo, de 300 ppi, que parece papel real incluso ante luz solar
            directa. Más libros en más lugares: guarda miles de títulos y
            llévalos todos contigo. Una sola carga vía USB-C dura semanas, no
            horas. No daña los ojos: ahora la luz cálida ajustable se oscurece
            de blanco a ámbar al cambiar la pantalla. Lectura sin miedo al agua:
            hecha para resistir la inmersión accidental en agua, puedes estar
            tranquilo en la playa o en el baño. Encuentra nuevas historias: con
            Kindle Unlimited obtén acceso ilimitado a más de dos millones de
            títulos, miles de audiolibros y más. Úsala con manos libres:
            conéctate con una suscripción Audible y unos audífonos o bocinas
            Bluetooth para escuchar tus historias.
          </p>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
