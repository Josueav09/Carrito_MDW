import axios from "./axios";

export const getProducts = async () => {
    return await axios.get("/products");
  };
  
  export const getProductsCart = async () => {
    return await axios.get("/productCart");
  };
  
  export const addProductToCart = async (product) => {
    const { name, img, price } = product;
    return await axios.post("/productCart", { name, img, price });
  };
  
  export const editProductInCart = async (id, query, amount) => {
    if (query === "del" && amount === 1) {
      return await axios.delete(`/cart/${id}`);
    } else {
      return await axios.put(`/cart/${id}?query=${query}`, { amount });
    }
  };
  
  export const clearCart = async () => {
    return await axios.delete("/productsCart"); // Ruta para vaciar el carrito
  };

  export const confirmarCompra = async (datosCompra) => {
    return await axios.post("/confirmarCompra", datosCompra);
  };
  
  