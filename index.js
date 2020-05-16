const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const Sequelize = require("sequelize");
const bodyParser = require("body-parser");

//Conexão banco de dados MySql
const sequelize = new Sequelize("test", "root", "pipoca", {
  host: "localhost",
  dialect: "mysql",
});

//Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Rotas

//rotas do autor
app.get("/autor", (req, res) => {
  res.render("formularioAutor");
});

app.post("/cadastro_de_autor", (req, res) => {
  res.send("Nome: " + req.body.name + " Email: " + req.body.email);
});

//rotas da categorias
app.get("/categoria", (req, res) => {
  res.render("formularioCategoria");
});

app.post("/cadastro_de_categoria", (req, res) => {
  res.send("Categoria cadastrada com Sucesso :} ");
});

//config
//template Engine
app.engine("handlebars", handlebars({ default: "main" }));
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  res.send("Oi");
});

app.listen(8081, () => {
  console.log("Servidor na porta 8081");
});
