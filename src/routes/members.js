const express = require("express");
const router = express.Router();

const memberController = require("../app/controllers/MembersController.js");

router.put("/:id", memberController.update);
router.get("/:id/edit", memberController.edit);

router.post("/store", memberController.store);
router.get("/create", memberController.create);

router.get("/:slug", memberController.show);
router.get("/", memberController.index);

module.exports = router;
