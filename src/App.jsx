import { BrowserRouter } from "react-router-dom";

import CartContextProvider from "./components/context/CartContext";

import AppRouter from "./components/routes/AppRouter";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <CartContextProvider>
          <AppRouter />
        </CartContextProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
