const products = [
  {
    id: "1",
    name: "zapato",
    img: "url",
    price: 100,
    category: "calzados",
    stock: "10",
  },
  {
    id: "2",
    name: "ojota",
    img: "url",
    price: 80,
    category: "calzados",
    stock: "15",
  },
  {
    id: "3",
    name: "media",
    img: "url",
    price: 10,
    category: "calzados",
    stock: "12",
  },
  {
    id: "4",
    name: "sombrero",
    img: "url",
    price: 150,
    category: "ropa",
    stock: "8",
  },
];

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      setTimeout(() => {
        resolve(products);
      }, 1000);
    } else {
      reject("no hay productos");
    }
  });
}; // para traer todos los productos

export const getProduct = (id) => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      const item = products.find((product) => product.id === id);

      setTimeout(() => {
        if (item) {
          resolve(item);
        } else {
          reject("no se encuentra el producto");
        }
      }, 1000);
    } else {
      reject("no hay productos");
    }
  });
}; // para traer 1 solo producto
