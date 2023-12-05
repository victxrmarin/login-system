const Sequelize = require("sequelize");
const dotenv = require("dotenv")
dotenv.config();

const { DB_NAME } = process.env;

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: `./${DB_NAME}.sqlite`
});






