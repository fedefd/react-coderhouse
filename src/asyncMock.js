export const products = [];

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
