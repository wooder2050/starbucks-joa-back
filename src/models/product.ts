import * as mongoose from "mongoose";
import { IProductModel } from "../types/models/Prodcut";

const productSchema: mongoose.Schema = new mongoose.Schema({
  name: {
    type: String,
  },
  img: {
    type: String,
  },
  content: {
    type: String,
  },
  price: {
    type: Number,
  },
});

const Product = mongoose.model<IProductModel>("Product", productSchema);
export default Product;
