// import { createContext, useEffect, useState } from "react";
// import axios from "axios";

// // Crear una instancia de Axios con la URL base configurada
// const axiosInstance = axios.create({
//   baseURL: 'http://localhost:4000',
// });

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);
//   const [products, setProducts] = useState([]);

//   // Función para obtener productos
//   const getProducts = async () => {
//     try {
//       const response = await axiosInstance.get("/products");
//       setProducts(response.data.products);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     }
//   };

//   // Función para obtener productos en el carrito
//   const getProductsCart = async () => {
//     try {
//       const response = await axiosInstance.get("/products-cart");
//       setCartItems(response.data.productsCart);
//     } catch (error) {
//       console.error("Error fetching cart items:", error);
//     }
//   };

//   // Efecto para cargar los productos y los productos en el carrito
//   useEffect(() => {
//     getProducts();
//     getProductsCart();
//   }, []);

//   // Función para agregar un producto al carrito
//   const addItemToCart = async (product) => {
//     const { name, img, price } = product;

//     try {
//       await axiosInstance.post("/products-cart", { name, img, price });
//       getProducts();
//       getProductsCart();
//     } catch (error) {
//       console.error("Error adding item to cart:", error);
//     }
//   };

//   // Función para editar un producto en el carrito
//   const editItemToCart = async (id, query, amount) => {
//     try {
//       if (query === "del" && amount === 1) {
//         await axiosInstance.delete(`/products-cart/${id}`);
//       } else {
//         await axiosInstance.put(`/products-cart/${id}?query=${query}`, { amount });
//       }
//       getProducts();
//       getProductsCart();
//     } catch (error) {
//       console.error("Error editing item in cart:", error);
//     }
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, products, addItemToCart, editItemToCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export default CartContext;

import { createContext, useState, useEffect } from "react";
import { getProducts, getProductsCart, addProductToCart, editProductInCart, clearCart, confirmarCompra } from "../api/CartRequest"; // Importar las funciones

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userId, setUserId] = useState(null);
  




  // Obtener productos desde el backend
  const fetchProducts = async () => {
    try {
      const response = await getProducts();
      setProducts(response.data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
      setError("Error fetching products.");
    }
  };

  // Obtener productos en el carrito desde el backend
  const fetchCartItems = async () => {
    try {
      const response = await getProductsCart();
      console.log("Respuesta de cartItems:", response.data.productsCart); // Revisa aquí
      setCartItems(response.data.productsCart); 
    } catch (error) {
      console.error("Error fetching cart items:", error);
      setError("Error fetching cart items.");
    }
  };

  // Efecto para cargar productos y productos en el carrito
  useEffect(() => {
    fetchProducts();
    fetchCartItems();
    setLoading(false);
  }, []);

  // Agregar un producto al carrito
  const addItemToCart = async (product) => {
    setLoading(true);
    try {
      await addProductToCart(product);
      fetchProducts();
      fetchCartItems();
    } catch (error) {
      console.error("Error adding item to cart:", error);
      setError("Error adding item to cart.");
    } finally {
      setLoading(false);
    }
  };

  // Editar un producto en el carrito
  const editItemInCart = async (id, query, amount) => {
    setLoading(true);
    try {
      await editProductInCart(id, query, amount);
      fetchProducts();
      fetchCartItems();
    } catch (error) {
      console.error("Error editing item in cart:", error);
      setError("Error editing item in cart.");
    } finally {
      setLoading(false); 
    }
  };

  const handleClearCart = async () => {
    setLoading(true);
    try {
      await clearCart(); // Llamar a la función de CartRequest para vaciar el carrito
      setCartItems([]); // Limpia el estado local del carrito
    } catch (error) {
      console.error("Error clearing cart:", error);
      setError("Error clearing cart.");
    } finally {
      setLoading(false);
    }
  };
 
  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");

    if (!storedUserId || storedUserId.length !== 24) {
        console.error("User ID no es válido:", storedUserId);
        return;  // Si el userId no es válido, no continuar con la solicitud
    }else {
            console.log("No se encontró userId en localStorage");
            // Puedes redirigir al login si no se encuentra
        }
  }, []);


  // const handleConfirmCompra = async (cartItems) => {
  //   if (!Array.isArray(cartItems)) {
  //     console.error("cartItems no es un arreglo", cartItems);
  //     return;
  //   }
  
  //   try {
  //     const response = await confirmarCompra({
  //       userId: userId, 
  //       items: cartItems.map(item => ({
  //         productId: item._id,  
  //         amount: item.amount,
  //         price: item.price,
  //       })),
  //       total: calculateTotal(cartItems),
  //     });
  
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error("Error al confirmar la compra:", error.response?.data || error.message);
  //   }
  // };
  
  const calculateTotal = (cartItems) => {
    return cartItems.reduce((total, item) => total + item.amount * item.price, 0);
  };

  // const handleConfirmCompra = async (cartItems) => {
  //   const storedUserId = localStorage.getItem("userId"); // O usa el estado que hayas actualizado

  //   if (!storedUserId) {
  //       console.error("User ID no disponible");
  //       return;  // Si el userId no está disponible, no continúes con la solicitud
  //   }

  //   if (!Array.isArray(cartItems)) {
  //     console.error("cartItems no es un arreglo:", cartItems);
  //     return;
  //   }
  
  //   try {
  //     const response = await confirmarCompra({
  //       userId: userId, 
  //       items: cartItems.map(item => ({
  //         productId: item._id,
  //         amount: item.amount,
  //         price: item.price,
  //       })),
  //       total: calculateTotal(cartItems),
  //     });
  
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error("Error al confirmar la compra:", error.response?.data || error.message);
  //   }
  // };

  const handleConfirmCompra = async (cartItems) => {
    
    
    if (!Array.isArray(cartItems)) {
      console.error("cartItems no es un arreglo:", cartItems);
      return;
    }
  
    try {
      const response = await confirmarCompra({
        items: cartItems.map(item => ({
          productId: item._id,
          amount: item.amount,
          price: item.price,
        })),
        total: calculateTotal(cartItems),
      });
      console.log(response.data);

       // Limpiar el carrito después de la compra
    await handleClearCart(); // Llamar a handleClearCart para vaciar el carrito
    } catch (error) {
      console.error("Error al confirmar la compra:", error.response?.data || error.message);
    }
  };


  return (
    <CartContext.Provider
      value={{
        cartItems,
        products,
        addItemToCart,
        editItemInCart,
        clearCart: handleClearCart,
        confirmCompra: handleConfirmCompra, 
        loading,
        error,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
