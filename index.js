const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const Autor = require("./models/Autor");
const Categoria = require("./models/Categoria");

//Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Rotas

//rotas do autor
app.get("/autor", (req, res) => {
  res.render("formularioAutor");
});

app.post("/cadastro_autor", (req, res) => {
  Autor.create({
    name: req.body.name,
    email: req.body.email,
  })
    .then(() => {
      res.send(`Autor criado com sucesso :}}}`);
    })
    .catch((erro) => {
      res.send(`Autor não pode ser cadastrado: ${erro}`);
    });
});

//rotas da categoria
app.get("/categoria", (req, res) => {
  res.render("formularioCategoria");
});

app.post("/cadastro_categoria", (req, res) => {
  Categoria.create({
    name: req.body.name,
  })
    .then(() => {
      res.send(`Categoria criado com sucesso :}}}`);
    })
    .catch((erro) => {
      res.send(`Categoria não pode ser cadastrado: ${erro}`);
    });
});

//config
//template Engine
app.engine("handlebars", handlebars({ default: "main" }));
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  res.send("Servidor de pé");
});

app.listen(8081, () => {
  console.log("Servidor na porta 8081");
});
