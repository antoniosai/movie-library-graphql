import { Dialect, Sequelize } from 'sequelize';

const dbDriver = "postgres" as Dialect
const dbHost = "127.0.0.1"
const dbPort = 5439;
const dbName = "db_movie" as string
const dbUser = "myusername" as string
const dbPassword = "mypassword"

console.log("ENV => ", process.env);

const sequelizeConnection = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  port: dbPort,
  dialect: dbDriver
})

export default sequelizeConnection