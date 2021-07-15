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
app.use(morgan("dev"));

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

//Catch 404
app.use((req, res, next) => {
  const err = new Error("Not found");
  err.status = 404;
  next(err);
})

//Error handler function
app.use((err, req, res, next) => {
  const error = app.get('env') === "development" ? err : {};
  const status = err.status || 500;

  //response to client
  return res.status(status).json({
    error: {
      message: error.message,
      status: status,
    }
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
