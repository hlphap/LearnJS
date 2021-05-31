const express = require("express");
const router = express.Router();

//Declare controller
const newsController = require("../app/controllers/NewsController.js");

router.use("/:slug", newsController.show);
router.use("/", newsController.index);

module.exports = router;
