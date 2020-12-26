import express from "express";

import { createServer } from "http";
import createError from "http-errors";

import initLoaders from "./loaders";

import indexRouter from "./routes";
import productRouter from "./routes/products";

const env: string = process.env.NODE_ENV || "development";
const port: number = Number(process.env.PORT) || 5000;

const app: express.Application = express();

const startServer = async () => {
  await initLoaders(app);

  app.use("/", indexRouter);
  app.use("/product", productRouter);

  app.use(
    (
      _req: express.Request,
      _res: express.Response,
      next: express.NextFunction
    ) => {
      next(createError(404));
    }
  );

  app.use(
    (
      err: any,
      req: express.Request,
      res: express.Response,
      _next: express.NextFunction
    ) => {
      res.locals.message = err.message;
      res.locals.error = req.app.get("env") === "development" ? err : {};

      res.status(err.status || 500);
      res.send({ error: err });
    }
  );

  const server = createServer(app);

  server.listen(port, () => {
    console.log(`> Ready on port ${port} [${env}]`);
  });
};

startServer();
