const {
  multipleMongooseToObject,
  mongooseToObject,
} = require("../../util/mongoose");
const Course = require("../models/Course");
class CoursesController {
  //[GET] /courses
  async index(req, res, next) {
    const courses = await Course.find({});
    return res.render("courses", { courses: multipleMongooseToObject(courses) })
  }

  //[GET] /courses/:id
  async show(req, res, next) {
    const course = await Course.findOne({ slug: req.params.id });
    return res.render("course/show", {
      course: mongooseToObject(course),
    });;
  }

  //[GET] /courses/create
  create(req, res, next) {
    res.render("course/create");
  }

  //[POST] /courses/
  async store(req, res, next) {
    const { name, description, videoId, level } = req.body;
    const image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
    const course = new Course({ name, description, videoId, level, image });

    await course.save();

    return res.redirect("/courses");
  }
  //[GET] /courses/:id/edit
  async edit(req, res, next) {
    const { id } = req.params;
    const course = await Course.findById(id);
    return res.render("course/edit", { course: mongooseToObject(course) })
  }

  //[PUT] /courses/:id
  async update(req, res, next) {
    const { id } = req.params;
    const { name, description, videoId, level } = req.body;
    await Course.updateOne({ _id: id }, { name, description, videoId, level })
    return res.redirect("/me/stored/courses");
  }

  //[DELETE] /courses/:id
  async delete(req, res, next) {
    const { id } = req.params;
    await Course.delete({ _id: id });
    return res.redirect("back");
  }

  //[PATCH] /courses/:id/restore
  async restore(req, res, next) {
    const { id } = req.params;
    await Course.restore({ _id: id });
    return res.redirect("back");
  }

  //[DELETE] /courses/:id/force
  async forceDelete(req, res, next) {
    const { id } = req.params;
    await Course.deleteOne({ _id: id });
    return res.redirect("back");
  }

  async handeFormAction(req, res, next) {
    const { action, courseIds } = req.body;
    console.log(courseIds);
    switch (action) {
      case 'delete':
        await Course.delete({
          _id: {
            $in: courseIds
          }
        });
        break;
      case 'restore':
        await Course.restore({
          _id: {
            $in: courseIds,
          }
        })
        break;
      case 'forceDelete':
        await Course.deleteMany({
          _id: {
            $in: courseIds,
          }
        })
        break;
      default:
        return res.status(403).json({ message: "Hành động không tồn tại" })
    }
    return res.redirect("back");
  }
}

module.exports = new CoursesController();
