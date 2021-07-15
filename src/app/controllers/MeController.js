const Course = require("../models/Course");
const Member = require("../models/Member");

const {
  multipleMongooseToObject,
  mongooseToObject,
} = require("../../util/mongoose");

class MeController {
  //[GET] /me/stored/courses
  async storedCourses(req, res, next) {
    const courses = await Course.find({});

    const deletedCount = await Course.countDocumentsDeleted({});

    return res.render("me/stored-courses", {
      deletedCount,
      courses: multipleMongooseToObject(courses)
    });
  }

  //[GET] /me/stored/members
  async storedMembers(req, res, next) {
    const members = await Member.find({});
    return res.render("me/stored-members", { members: multipleMongooseToObject(members) })
  }

  async trashMembers(req, res, next) {
    const members = await Member.find({});
    return res.render("me/stored-members", { members: multipleMongooseToObject(members) })
  }

  async trashCourses(req, res, next) {
    const courses = await Course.findDeleted({});
    return res.render("me/trash-courses", { courses: multipleMongooseToObject(courses) });
  }
}

module.exports = new MeController();
