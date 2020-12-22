import express from "express";

import { createServer } from "http";
import createError from "http-errors";

import bodyParser from "body-parser";
import cors from "cors";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import mongoose from "mongoose";
import swaggerOptions from "./config/swaggerOptions";
import config from "./config";

import indexRouter from "./routes";
import productRouter from "./routes/products";

const env: string = process.env.NODE_ENV || "development";
const port: number = Number(process.env.PORT) || 5000;

const app: express.Application = express();

const expressLoader = (app: express.Application): express.Application => {
  app.use(cors());
  app.use(logger("dev"));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, "public")));

  const specs = swaggerJsdoc(swaggerOptions);
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(specs, { explorer: true }));
  return app;
};

const mongooseLoader = async (): Promise<void> => {
  const { MONGODB_BASE_URL, MONGODB_DATABASE_NAME } = config;
  const connect = async () => {
    mongoose.set("debug", true);
    mongoose.connect(`${MONGODB_BASE_URL}`, {
      dbName: `${MONGODB_DATABASE_NAME}`,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
      (err: any) => {
        if (err) console.log("몽고디비 연결 에러 : ", err);
        else console.log("몽고디비 연결 성공");
      };
  };
  await connect();
  mongoose.connection.on("error", (e) => {
    console.error("connection error:");
    console.error(e);
  });
  mongoose.connection.once("open", () => {
    console.log("mongo db connected");
  });
};
const initLoaders = async (app: express.Application): Promise<void> => {
  expressLoader(app);
  await mongooseLoader();
};
const startServer = async () => {
  await initLoaders(app);

  app.use("/", indexRouter);
  app.use("/product", productRouter);

  app.use(
    (
      req: express.Request,
      res: express.Response,
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
      next: express.NextFunction
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
