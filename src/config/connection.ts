import { Sequelize } from "sequelize-typescript";

const connection = new Sequelize('postgres://user:pass@example.com:5432/dbname');

export default connection;