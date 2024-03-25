import { Link } from "react-router-dom";
import { getCategoryIcon } from "../../common/categoryIcons/CategoryIcons";
import "./ItemList.css";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
const ItemList = ({ products }) => {
  return (
    <>
      <h2>Conocé todos nuestros productos</h2>
      <div className="itemList">
        {products.map((product) => (
          <Card key={product.id} className="itemListProductCard">
            <Link to={`/item/${product.id}`} className="itemListButtonLink">
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h4"
                  component="div"
                  style={{ fontSize: "1.1rem", height: "55px" }}
                >
                  {product.name}
                </Typography>
                <CardMedia
                  component="img"
                  image={product.img}
                  alt={product.name}
                  className="itemListImg"
                />
                <Typography
                  gutterBottom
                  component="span"
                  style={{ fontSize: ".9rem" }}
                >
                  {product.cardDetail}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  style={{ fontWeight: 700 }}
                >
                  $ {product.price}
                </Typography>
                <div className="categoryIcon">
                  {getCategoryIcon(product.category)}
                </div>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
      <div>
        <h3>O busque por categoría:</h3>
        <div className="itemListButtonCategoryWrapper">
          <Button variant="contained" className="itemListButtonCategory">
            <Link to="/category/Libros" className="itemListButtonLink">
              Libros
            </Link>
          </Button>
          <Button variant="contained" className="itemListButtonCategory">
            <Link
              to="/category/dispositivos-electronicos"
              className="itemListButtonLink"
            >
              Dispositivos Electronicos
            </Link>
          </Button>
          <Button variant="contained" className="itemListButtonCategory">
            <Link
              to="/category/merchadising-literario"
              className="itemListButtonLink"
            >
              Merchadising Literario
            </Link>
          </Button>
          <Button variant="contained" className="itemListButtonCategory">
            <Link
              to="/category/material-papeleria"
              className="itemListButtonLink"
            >
              Material de Papeleria
            </Link>
          </Button>
          <Button variant="contained" className="itemListButtonCategory">
            <Link to="/category/juegos-de-mesa" className="itemListButtonLink">
              Juegos de Mesa
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default ItemList;
