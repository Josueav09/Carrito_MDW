import { model, Schema } from "mongoose";

const productsSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  img: {
    type: String,
    required: true,
  },
  inCart: {
    type: Boolean,
    default: false,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: Number,
    required: true,
  },
  stock:{
    type:Number,
    required:true
  }
  
});

export default model("Products", productsSchema);
