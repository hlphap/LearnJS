const {
  multipleMongooseToObject,
  mongooseToObject,
} = require("../../util/mongoose");
const Course = require("../models/Course");
class CoursesController {
  //[GET] /courses
  index(req, res, next) {
    Course.find({})
      .then((courses) => {
        res.render("courses", { courses: multipleMongooseToObject(courses) });
      })
      .catch(next);
  }

  //[GET] /courses/slug
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) =>
        res.render("course/show", {
          course: mongooseToObject(course),
        })
      )
      .catch(next);
  }

  //[GET] /courses/create
  create(req, res, next) {
    res.render("course/create");
  }
  //[POST] /courses/store
  store(req, res, next) {
    const formData = req.body;
    formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
    const course = new Course(formData);
    course
      .save()
      .then(() => res.redirect("/courses"))
      .catch(next);
  }
  //[GET] /courses/:id/edit
  edit(req, res, next) {
    Course.findById(req.params.id)
      .then((course) =>
        res.render("course/edit", { course: mongooseToObject(course) })
      )
      .catch(next);
  }

  //[PUT] /courses/:id
  update(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect("/me/stored/courses"))
      .catch(next);
  }

  //[DELETE] /courses/:id
  delete(req, res, next) {
    Course.deleteOne({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }
}

module.exports = new CoursesController();
