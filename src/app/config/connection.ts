import { Dialect, Sequelize } from 'sequelize';

// TODO: Create an Enviromnet Variables for Database Credential
const dbDriver = "postgres" as Dialect
const dbHost = "127.0.0.1"
const dbPort = 5439;
const dbName = "db_movie" as string
const dbUser = "myusername" as string
const dbPassword = "mypassword"

const sequelizeConnection = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  port: dbPort,
  dialect: dbDriver
})

export default sequelizeConnection