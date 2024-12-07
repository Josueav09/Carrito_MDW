import  CompraCarrito  from "../models/compraCarrito.model.js";
import Cart  from "../models/cart.model.js";
import Product from "../models/products.model.js";
  

export const confirmarCompra = async (req, res) => {
    const { items, total } = req.body;
  
    if (!items || items.length === 0) {
      return res.status(400).json({ mensaje: "El carrito está vacío" });
    }
  
    if (!total) {
      return res.status(400).json({ mensaje: "El total es obligatorio" });
    }
  
    try {
      console.log(req.body);  // Esto te ayudará a ver qué datos están llegando
  
      // Aquí procesas los items
      const itemsProcesados = items.map(item => ({
        productId: item.productId, 
        amount: item.amount,
        price: item.price,
      }));
  
      // Crear la compra en la base de datos
      const nuevaCompra = new CompraCarrito({
        items: itemsProcesados,
        total,
      });
  
      await nuevaCompra.save();
  
      res.json({ mensaje: "Compra confirmada exitosamente", compra: nuevaCompra });
  
    } catch (error) {
      console.error("Error al procesar la compra:", error);
      res.status(500).json({ mensaje: "Error al confirmar la compra", error: error.message });
    }
  };
  