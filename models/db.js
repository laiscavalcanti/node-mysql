const Sequelize = require("sequelize");

//Conexão banco de dados MySql
const sequelize = new Sequelize("edigi", "root", "pipoca", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize,
};
