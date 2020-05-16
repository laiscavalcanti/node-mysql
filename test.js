const Author = sequelize.define("autores", {
  name: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.TEXT,
  },
});

const Categoria = sequelize.define("categorias", {
  name: {
    type: Sequelize.STRING,
  },
});

//Categoria.sync({ force: true });
