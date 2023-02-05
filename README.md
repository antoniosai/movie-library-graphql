# Movie Library GraphQL

Written with NodeJS, TypeScript, Sequelize ORM & ApolloServer

# Requirements

- Installed DBMS (Docker / Host). You can choose between Postgres (Recommended) or MySQL.
- NodeJS 16.16.0 LTS
- Nodemon installed globally. You can install with this command : **_npm install -g nodemon_**

## Installation

1.  Create a Database for current project.
2.  Move to Project Directory.
3.  Install a Node dependencies. You can use between **_npm_** or **_yarn_**

> **_npm install_** or **_yarn install_**

3.  Configure environment to config an App. Copy from **_.env.example_** to create **_.env_** file

> **_cp .env.example .env_**

And configure your own .env

> APP_PORT=8080
> NODE_ENV=.env
> DB_DRIVER=postgres
> DB_HOST=dbhost
> DB_PORT=5432
> DB_NAME=dbname
> DB_USERNAME=dbusername
> DB_PASSWORD=dbpassword
> CONNECTION_STRING=postgres://username:password@host:yourport

4.  Install Postgre dependecy if you use Postgre as DBMS.

> **_yarn add pg_** or **_npm install pg_**

6.  Run project

> **_yarn watch-node_** or **_npm run watch-node_**

## Hosted Project

You can checkout this project by open this URL.

- https://summer-sun-281.fly.dev/graphql
- https://summer-sun-281.fly.dev/graphiql

## Tech Stack Used

- NodeJS
- TypeScript
- SequelizeORM
- PostgreSQL
- ApolloServer
- GraphiQL
- fly.io
