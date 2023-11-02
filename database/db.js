
const Sequelize = require("sequelize");
const dotenv = require("dotenv")
dotenv.config();

const { DB_NAME, USER, HOSTNAME, PASSWORD, PORT } = process.env;

const sequelize = new Sequelize(DB_NAME, USER, PASSWORD, {
  dialect: "mariadb",
  host: HOSTNAME,
  port: PORT,
  waitForConnections: true,
  connectionLimit: 10,
});

module.exports = {
  sequelize,
}




