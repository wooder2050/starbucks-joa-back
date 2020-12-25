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
  name_eng: {
    type: String,
  },
  kcal: {
    type: String,
  },
  protein: {
    type: String,
  },
  sat_fat: {
    type: String,
  },
  sodium: {
    type: String,
  },
  sugars: {
    type: String,
  },
  caffeine: {
    type: String,
  },
});

const Product = mongoose.model<IProductModel>("Product", productSchema);
export default Product;
