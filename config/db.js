const { Sequelize } = require("sequelize");
const { ENVIRONMENT } = require("../constants/enums");
const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT, ENV } = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "postgres",
  port: DB_PORT,
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("-----------DB Connected Successfully---------");
    if(ENV !== ENVIRONMENT.PROD) await sequelize.sync({ alter: true });
  } catch (error) {
    console.log("ERR in connectDB--", error.message);
  }
};

module.exports = {
  connectDB,
  sequelize
};
