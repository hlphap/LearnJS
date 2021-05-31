class CoursesController {
  index(req, res) {
    res.render("courses");
  }

  show(req, res) {
    res.send("Detail Courses");
  }
}

module.exports = new CoursesController();
