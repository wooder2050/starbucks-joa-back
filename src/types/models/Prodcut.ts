import { Document } from "mongoose";

export interface IProductModel extends Document {
  name: string;
  img: string;
  content: string;
  price: string;
}
