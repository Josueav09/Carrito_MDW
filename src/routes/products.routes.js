import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { addProductCart, deleteProductCart, getProductCart, getProducts, putProduct, clearCart } from "../controllers/cliente.controller.js";

const router = Router()

router.get('/products', authRequired, getProducts); // Obtener todos los productos del carrito
router.get('/productCart', authRequired, getProductCart); // Obtener un producto específico del carrito por ID
router.post('/productCart', authRequired, addProductCart); // Agregar un producto al carrito
router.delete('/cart/:productId', authRequired, deleteProductCart); // Eliminar un producto del carrito
router.put('/cart/:productId', authRequired, putProduct); // Actualizar un producto del carrito (ej. cantidad)
router.delete('/productsCart', authRequired, clearCart); // Eliminar todos los productos del carrito

export default router; 