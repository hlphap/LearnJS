//Require
const path = require("path");
const express = require("express");
const morgan = require("morgan");
const exphbs = require("express-handlebars");
const routes = require("./routes/index.js");
const db = require("./config/db");
const methodOverride = require("method-override");
const { dirname } = require("path");

//Declare app
const app = express();
const port = 3000;

//Connect
db.connect();

//Static file
app.use(express.static(path.join(__dirname, "public")));
//Config Json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Override Method
app.use(methodOverride("_method"));
//HTTP logger
// app.use(morgan("combined"));

//Template engine
app.engine(
  "hbs",
  exphbs({
    extname: ".hbs",
    helpers: {
      sum: (a, b) => a + b,
    },
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

//Express App
routes(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
