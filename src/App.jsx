import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import Home from "./components/pages/home/Home";
import Cart from "./components/common/Cart";
import NotFound from "./components/pages/notFound/notFound";
import ItemDetailContainer from "./components/pages/itemDetailContainer/ItemDetailContainer";
import CheckoutContainer from "./components/pages/checkout/CheckoutContainer";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route
              path="/"
              element={
                <Home greeting="¡Bienvenido a Bookpolis, nuestra tienda online!" />
              }
            />
            <Route path="/products" element={<ItemListContainer />} />
            <Route path="/category/:category" element={<ItemListContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/checkout" element={<CheckoutContainer />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
