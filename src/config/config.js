require('dotenv').config();
const { PG_USERNAME, PG_PASSWORD, PG_HOST, PG_DATABASE, DATABASE_TYPE } = process.env;


module.exports = {
  development: {
    username: PG_USERNAME || "postgres",
    password: PG_PASSWORD || null,
    database: PG_DATABASE || "dbname",
    host: PG_HOST || "127.0.0.1",
    dialect: DATABASE_TYPE || "postgres",
    underscored: true,
    logging: false
  },
  test: {
    username: PG_USERNAME || "root",
    password: PG_PASSWORD || null,
    database: PG_DATABASE || "app_test",
    host: PG_HOST || "127.0.0.1",
    dialect: "postgres",
    operatorsAliases: false
  },
  production: {
    username: PG_USERNAME || "root",
    password: PG_PASSWORD || null,
    database: PG_DATABASE || "app_production",
    host: PG_HOST || "127.0.0.1",
    dialect: "postgres",
    operatorsAliases: false
  }
};
