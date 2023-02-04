import dotenv from "dotenv";
import path from "path";
import { Dialect } from "sequelize";

// Parsing the env file.
dotenv.config({ path: path.resolve(".env") });

// Interface to load env variables
// Note these variables can possibly be undefined
// as someone could skip these varibales or not setup a .env file at all

interface ENV {
  DB_DRIVER: Dialect | undefined;
  DB_HOST: string | undefined;
  DB_PORT: number | undefined;
  DB_NAME: string | undefined;
  DB_USERNAME: string | undefined;
  DB_PASSWORD: string | undefined;
}

interface Config {
  DB_DRIVER: Dialect;
  DB_HOST: string;
  DB_PORT: number;
  DB_NAME: string;
  DB_USERNAME: string;
  DB_PASSWORD: string;
}

// Loading process.env as ENV interface

const getConfig = (): ENV => {
  return {
    DB_DRIVER: process.env.DB_DRIVER ? process.env.DB_DRIVER as Dialect : undefined,
    DB_HOST: process.env.DB_HOST,
    DB_PORT: process.env.DB_PORT ? Number(process.env.DB_PORT) : undefined,
    DB_NAME: process.env.DB_NAME,
    DB_USERNAME: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
  };
};

// Throwing an Error if any field was undefined we don't 
// want our app to run if it can't connect to DB and ensure 
// that these fields are accessible. If all is good return
// it as Config which just removes the undefined from our type 
// definition.

const getSanitzedConfig = (config: ENV): Config => {
  console.log("ATEST", Object.entries(config));

  console.log("PATH => ",'/.env');
  for (const [key, value] of Object.entries(config)) {
    if (value === undefined) {
      throw new Error(`Missing key ${key} in config.env`);
    }
  }
  return config as Config;
};

const config = getConfig();

const sanitizedConfig = getSanitzedConfig(config);

export default sanitizedConfig;