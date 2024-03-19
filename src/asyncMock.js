const products = [
  {
    id: 1,
    name: "El principito",
    img: "url",
    price: 200,
    category: "Libros",
    stock: 20,
  },
  {
    id: 2,
    name: "Cien años de soledad",
    img: "url",
    price: 250,
    category: "Libros",
    stock: 15,
  },
  {
    id: 3,
    name: "Breve historia del tiempo",
    img: "url",
    price: 180,
    category: "Libros",
    stock: 18,
  },
  {
    id: 4,
    name: "Sapiens: De animales a dioses",
    img: "url",
    price: 220,
    category: "Libros",
    stock: 12,
  },
  {
    id: 5,
    name: "E-reader Kindle Paperwhite",
    img: "url",
    price: 150,
    category: "dispositivos-electronicos",
    stock: 10,
  },
  {
    id: 6,
    name: "Conjunto de taza y posavasos con cita literaria",
    img: "url",
    price: 30,
    category: "merchadising-literario",
    stock: 25,
  },
  {
    id: 7,
    name: "Cuaderno de escritura creativa",
    img: "url",
    price: 15,
    category: "material-papeleria",
    stock: 30,
  },
  {
    id: 8,
    name: "Juego de mesa de trivia literaria",
    img: "url",
    price: 40,
    category: "juegos-de-mesa",
    stock: 8,
  },
];

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      setTimeout(() => {
        resolve(products);
      }, 300);
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
      }, 300);
    } else {
      reject("no hay productos");
    }
  });
}; // para traer 1 solo producto
