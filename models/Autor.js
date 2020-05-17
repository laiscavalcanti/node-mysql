const db = require("./db");

const Autor = db.sequelize.define("autores", {
  name: {
    type: db.Sequelize.STRING,
  },
  email: {
    type: db.Sequelize.TEXT,
  },
});

module.exports = Autor;
