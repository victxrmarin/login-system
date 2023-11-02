const Sequelize = require("sequelize");
const { DataTypes } = require("sequelize");
const db = require("./db");

module.exports = (db, DataTypes) => {
  const Login = db.define({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
