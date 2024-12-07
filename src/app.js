import express from 'express'
import morgan from 'morgan'
import authRoutes from './routes/auth.routes.js'
import taskRoutes from "./routes/task.routes.js";
import cookieParser from 'cookie-parser'
import cors from 'cors'
import productsRoutes from "./routes/products.routes.js";
import compraCarritoRoutes from "./routes/compraCarrito.routes.js";


const app = express();

app.use(cors({
    origin: 'http://localhost:5174',
    credentials: true
}))

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser())

app.use("/api",authRoutes);
app.use("/api",taskRoutes);
app.use("/api",productsRoutes);
app.use("/api",compraCarritoRoutes);

app.get('/', (req, res) =>{
    res.send('<h1>Hola BackEnd</h1>')
})


export default app