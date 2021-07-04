const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database.js")
const categoriesController = require("./categories/CategoriesController");
const articlesController = require("./articles/articlesController");

const Article = require("./articles/Article");
const Category = require("./categories/Category");




//Defino o EJs como View engine
app.set('view engine', 'ejs');

// Carrego os arquivos estaticos
app.use(express.static('public'));

//BodyParser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//database
connection
    .authenticate()
    .then(()=> {
        console.log("conexão feita com sucesso!")
    }).catch((error)=> {
        console.log(error);
    })

// >>>>>>>>>>>>Rotas<<<<<<<<<<<<<
app.use('/',categoriesController);
app.use('/',articlesController);

app.get("/", (req, res) => {
    res.render("index");
})


app.listen(8080, () => {
    console.log("O servidor está rodando!")
})