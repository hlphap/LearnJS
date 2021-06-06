const express = require("express");
const router = express.Router();

const policyController = require("../app/controllers/PolicyController.js");

router.delete("/:id", policyController.delete);

router.get("/create", policyController.create);
router.post("/store", policyController.store);

router.get("/:id/edit", policyController.edit);
router.put("/:id", policyController.update);

router.get("/", policyController.index);

module.exports = router;
