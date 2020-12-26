import * as mongoose from "mongoose";
import { IProductModel } from "../types/models/Prodcut";

const productSchema: mongoose.Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  img: {
    type: String,
    required: true,
    trim: true,
  },
  content: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    trim: true,
  },
  name_eng: {
    type: String,
    required: true,
    trim: true,
  },
  kcal: {
    type: String,
    required: true,
    trim: true,
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
