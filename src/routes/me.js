const router = require("express-promise-router")();

const meController = require("../app/controllers/MeController.js");

router.get("/stored/courses", meController.storedCourses);
router.get("/trash/courses", meController.trashCourses);
router.get("/stored/members", meController.storedMembers);
router.get("/trash/members", meController.trashMembers);

module.exports = router;
