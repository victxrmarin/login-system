const { DataTypes, Sequelize } = require("sequelize");
const db = new Sequelize("sqlite::memory");

const Login = db.define("login", {
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

await Login.sync({ force: true });
console.log("Database connected!");
