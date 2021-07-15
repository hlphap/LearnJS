const router = require("express-promise-router")();

const coursesController = require("../app/controllers/CoursesController.js");

router.get("/create", coursesController.create);
router.post("/handle-form-action", coursesController.handeFormAction);
router.get("/:id/edit", coursesController.edit);
router.patch("/:id/restore", coursesController.restore)
router.delete("/:id/force", coursesController.forceDelete)


router.route("/:id")
    .get(coursesController.show)
    .put(coursesController.update)
    .delete(coursesController.delete)

router.route("/")
    .get(coursesController.index)
    .post(coursesController.store)

module.exports = router;
