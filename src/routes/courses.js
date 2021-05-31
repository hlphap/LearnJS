const express = require("express");
const router = express.Router();

//
const coursesController = require("../app/controllers/CoursesController.js");

router.use("/:slug", coursesController.show);
router.use("/", coursesController.index);
module.exports = router;
