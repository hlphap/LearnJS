//Require Router
const newsRouter = require("./news.js");
const siteRouter = require("./site.js");
const coursesRouter = require("./courses.js");

function routes(app) {
  app.use("/news", newsRouter);
  app.use("/courses", coursesRouter);
  app.use("/", siteRouter);
}

module.exports = routes;
