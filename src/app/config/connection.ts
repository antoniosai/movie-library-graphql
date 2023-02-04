import config from "./config";

import { Dialect, Sequelize } from 'sequelize';

// TODO: Create an Enviromnet Variables for Database Credential
const dbDriver = config.DB_DRIVER as Dialect
const dbHost = config.DB_HOST
const dbPort = Number(config.DB_PORT);
const dbName = config.DB_NAME as string;
const dbUser = config.DB_USERNAME as string;
const dbPassword = config.DB_PASSWORD;

const sequelizeConnection = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  port: dbPort,
  dialect: dbDriver
})

export default sequelizeConnection