import * as express from "express";
import mongoose from "mongoose";
import config from "../config";

import bodyParser from "body-parser";
import cors from "cors";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import swaggerOptions from "../config/swaggerOptions";

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
    await mongoose.set("debug", true);
    await mongoose.connect(`${MONGODB_BASE_URL}`, {
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

export default initLoaders;
