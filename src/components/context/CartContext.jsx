import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    let existe = isInCart(product.id);

    if (existe) {
      const newArray = cart.map((elemento) => {
        if (elemento.id === product.id) {
          return {
            ...elemento,
            quantity: product.quantity,
          };
        } else {
          return elemento;
        }
      });

      setCart(newArray);
    } else {
      setCart([...cart, product]);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    let existe = cart.some((elemento) => elemento.id === id);
    return existe;
  };

  const removeById = (id) => {
    let newArray = cart.filter((elemento) => elemento.id !== id);

    setCart(newArray);
  };

  const getTotalItems = () => {
    let totalItems = cart.reduce((acumulador, elemento) => {
      return acumulador + elemento.quantity;
    }, 0);
    return totalItems;
  };

  const getTotalPrice = () => {
    let totalPrice = cart.reduce((acc, e) => {
      return acc + e.quantity * e.price;
    }, 0);
    return totalPrice;
  };

  const getTotalQuantityById = (id) => {
    //si encuentra devuelve el elemento, si no, undefined
    let product = cart.find((elemento) => elemento.id === id);
    return product ? product.quantity : product;
  };

  let data = {
    cart,
    addToCart,
    clearCart,
    removeById,
    getTotalItems,
    getTotalPrice,
    getTotalQuantityById,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
