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
    } else if (req.query.category) {
      const { category } = req.query;
      product = await Product.find({ category }).limit(50);
    } else {
      product = await Product.find({}).limit(50);
    }
    res.status(200).json({ product });

    // const ex = [];
    // for (let i = 0; i <= 45; i++) {
    //   ex.push({
    //     _id: "5fe5e5e8b8bfb5285707223a",
    //     name: "나이트로 바닐라 크림",
    //     content:
    //       "부드러운 목넘김의 나이트로 커피와 바닐라 크림의 매력을 한번에 느껴보세요!",
    //     img: "http://d2xwo4a782qt1n.cloudfront.net/NitroColdBrew.jpg",
    //     price: 5900,
    //     name_eng: "Nitro Vanilla Cream",
    //     kcal: "75",
    //     protein: "1",
    //     sat_fat: "2",
    //     sodium: "20",
    //     sugars: "10",
    //     caffeine: "245",
    //     category: "콜드 브루",
    //   });
    // }
    // res.status(200).json({ product: ex });

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
