const db = require("./db");

const Categoria = db.sequelize.define("categorias", {
  name: {
    type: db.Sequelize.STRING,
  },
});

module.exports = Categoria;

//Categoria.sync({ force: true });
