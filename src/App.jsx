import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import Home from "./components/pages/home/Home";
import Cart from "./components/common/Cart";
import ItemDetailContainer from "./components/pages/itemDetailContainer/ItemDetailContainer";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
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
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
