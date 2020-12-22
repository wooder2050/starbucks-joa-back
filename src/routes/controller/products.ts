import express from "express";

import Product from "../../models/product";
import { IProductModel } from "../../types/models/Prodcut";

export const getProduct = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  // console.log(req.param);

  console.log(req.params);
  try {
    const { productId } = req.params;
    //5fe1f71fe2ddd6bdabf1f186
    const getProductById = async (id: string): Promise<IProductModel | null> =>
      await Product.findById(id);
    const product = await getProductById(productId);
    // const product = await Product.find({});
    console.log(product);
    res.status(200).json({ product });

    // res.status(200).send({});
  } catch (e) {
    next();
  }
};
