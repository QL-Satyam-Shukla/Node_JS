 require("dotenv").config({ path: __dirname + "/../../.env" });

const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,     
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    dialect: process.env.DB_DIALECT,
    host: process.env.DB_HOST,
    logging: console.log,
    dialectOptions: {
      connectTimeout: 60000
    }
  }
);

module.exports = sequelize;
