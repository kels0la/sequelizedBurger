//dependencies
var express = require("express");
var bodyParser = require("body-parser");

//set up express
var PORT = process.env.PORT || 8080;
var app = express();

//require models for syncing
var db = require("./models");

//static directory
app.use(express.static("public"));

//parsing
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

//Set Handlebars.
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//route
const routes = require("./controllers/burgers_controller.js")
app.use(routes);

//Syncing our sequelize models and then starting our Express app
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

