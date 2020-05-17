const db = require("./db");

const Autor = db.sequelize.define("autores", {
  name: {
    type: db.Sequelize.STRING,
  },
  email: {
    type: db.Sequelize.TEXT,
  },
});

const Categoria = db.sequelize.define("categorias", {
  name: {
    type: db.Sequelize.STRING,
  },
});

module.exports = Autor;
module.exports = Categoria;

//Category.sync({ forse: true });
