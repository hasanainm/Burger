var express = require("express");
var bodyParser = require("body-parser");

var port = process.env.port || 3000;

var app = express();

// returns the current working directory
app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


var routes = require("./controllers/burgers_controllers.js");

app.use("/", routes);

app.listen(port, function() {
  console.log("Server is listening on: http://localhost:" + port);
});