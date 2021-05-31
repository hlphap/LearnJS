const express = require("express");
const router = express.Router();

//Declare controller
const siteController = require("../app/controllers/SiteController.js");

router.use("/:slug", siteController.show);
router.use("/", siteController.index);

module.exports = router;
