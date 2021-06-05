const express = require("express");
const router = express.Router();

//Declare controller
const siteController = require("../app/controllers/SiteController.js");

router.get("/search", siteController.show);
router.get("/", siteController.index);

module.exports = router;
