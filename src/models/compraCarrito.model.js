import mongoose from "mongoose";

const compraCarritoSchema = new mongoose.Schema({
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "clientes",
      required: false,
    },
    items: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "products",
          required: true,
        },
        amount: {
          type: Number,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
      },
    ],
    total: {
      type: Number,
      required: true,
    },
    fechaCompra: {
      type: Date,
      default: Date.now,
    },
  });
  

export default mongoose.model("compraCarrito", compraCarritoSchema)
