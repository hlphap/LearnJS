const router = require("express-promise-router")();

const memberController = require("../app/controllers/MembersController.js");

router.get("/:id/edit", memberController.edit);
router.get("/create", memberController.create);

router.route("/:id")
    .get(memberController.show)
    .put(memberController.update);

router.route("/")
    .get(memberController.index)
    .post(memberController.store);

module.exports = router;
