import {Router} from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { confirmarCompra } from "../controllers/compraCarrito.controller.js";

const router = Router();

router.post('/confirmarCompra', authRequired, confirmarCompra);


export default router;
