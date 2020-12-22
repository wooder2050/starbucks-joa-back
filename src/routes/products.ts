import * as express from "express";

import { getProduct } from "./controller/products";

const router: express.Router = express.Router();

/**
 * @swagger
 * definitions:
 *   Product:
 *     type: "object"
 *     properties:
 *       name:
 *         type: "string"
 *         example: "돌체 콜드 브루"
 *       img:
 *         type: "string"
 *         example: "https://www.starbucks.images"
 *       content:
 *         type: "string"
 *         example: "더 이상의 다른 설명은 필요없는 스타벅스"
 *       price:
 *         type: "number"
 *         example: 5300
 */
/**
 * @swagger
 * /product:
 *   get:
 *     summary: "Returns Product Alll"
 *     consumes:
 *       "application/json"
 *     produces:
 *       "application/json"
 *     parameters:
 *       - in: "body"
 *         name: "body"
 *         description: " All Product object that needs to show"
 *         schema:
 *           $ref: "#/definitions/Product"
 *     responses:
 *       "200":
 *         description: "Product Data"
 */

/**
 * @swagger
 * /product/:productId:
 *   get:
 *     summary: "Returns Product"
 *     consumes:
 *       "application/json"
 *     produces:
 *       "application/json"
 *     parameters:
 *       - in: "body"
 *         name: "body"
 *         description: "Product object that needs to show"
 *         schema:
 *           $ref: "#/definitions/Product"
 *     responses:
 *       "200":
 *         description: "Product Data"
 */

router.get("/", (req, res, next) => {
  res.send("respond with a resource");
});

router.get("/:productId", getProduct);

export default router;
