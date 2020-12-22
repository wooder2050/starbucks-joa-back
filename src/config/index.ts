import * as dotenv from "dotenv";
import { IConfig } from "../types/index";

const env = process.env.NODE_ENV || "development";
const dev = env === "development";

if (dev) dotenv.config();

const config: IConfig = {
  MONGODB_BASE_URL: process.env.MONGODB_BASE_URL,
  MONGODB_DATABASE_NAME: process.env.MONGODB_DATABASE_NAME,
};

export default config;
