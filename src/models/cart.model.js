import { model, Schema } from "mongoose";

const cartSchema = new Schema({
  userId: { // Agregado el campo userId
    type: Schema.Types.ObjectId,
    ref: "User", // Relación con el modelo User
    required: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  img: {
    type: String,
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
});

export default model("Cart", cartSchema);
