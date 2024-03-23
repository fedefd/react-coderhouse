import CartContainer from "../pages/cart/CartContainer";
import CheckoutContainer from "../pages/checkout/CheckoutContainer";
import Home from "../pages/home/Home";
import ItemDetailContainer from "../pages/itemDetailContainer/ItemDetailContainer";
import ItemListContainer from "../pages/itemListContainer/ItemListContainer";
import notFound from "../pages/notFound/notFound";

export const routes = [
  {
    id: "home",
    path: "/",
    Element: Home,
  },
  {
    id: "products",
    path: "/products",
    Element: ItemListContainer,
  },
  {
    id: "category",
    path: "/category/:category",
    Element: ItemListContainer,
  },
  {
    id: "cart",
    path: "/cart",
    Element: CartContainer,
  },
  {
    id: "itemId",
    path: "/item/:id",
    Element: ItemDetailContainer,
  },
  {
    id: "checkout",
    path: "/checkout",
    Element: CheckoutContainer,
  },
  {
    id: "notfound",
    path: "*",
    Element: notFound,
  },
];
