import express from "express";

import Product from "../../models/product";
import { IProductModel } from "../../types/models/Prodcut";

export const getProductAll = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    let product;
    if (req.query.size && req.query.page) {
      const { size, page } = req.query;
      product = await Product.find({})
        .skip((+page - 1) * +size)
        .limit(+size);
    } else {
      product = await Product.find({}).limit(10);
    }
    res.status(200).json({ product });
  } catch (e) {
    next();
  }
};

export const getProduct = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const { productId } = req.params;
    const getProductById = async (id: string): Promise<IProductModel | null> =>
      await Product.findById(id);
    const product = await getProductById(productId);
    res.status(200).json({ product });
  } catch (e) {
    next();
  }
};
