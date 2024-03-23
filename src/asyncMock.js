export const products = [
  {
    name: "Breve historia del tiempo",
    img: "url",
    price: 6000,
    category: "Libros",
    stock: 18,
  },
  {
    name: "Sapiens: De animales a dioses",
    img: "url",
    price: 5500,
    category: "Libros",
    stock: 12,
  },
  {
    name: "E-reader Kindle Paperwhite",
    img: "url",
    price: 18900,
    category: "dispositivos-electronicos",
    stock: 10,
  },
  {
    name: "Conjunto de taza y posavasos con cita literaria",
    img: "url",
    price: 21900,
    category: "merchadising-literario",
    stock: 25,
  },
  {
    name: "Cuaderno de escritura creativa",
    img: "url",
    price: 3000,
    category: "material-papeleria",
    stock: 30,
  },
  {
    name: "Juego de mesa de trivia literaria",
    img: "url",
    price: 8000,
    category: "juegos-de-mesa",
    stock: 8,
  },
];

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      setTimeout(() => {
        resolve(products);
      }, 200);
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
      }, 200);
    } else {
      reject("no hay productos");
    }
  });
}; // para traer 1 solo producto
