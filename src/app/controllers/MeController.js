const Course = require("../models/Course");
const Member = require("../models/Member");

const {
  multipleMongooseToObject,
  mongooseToObject,
} = require("../../util/mongoose");

class MeController {
  //[GET] /me/stored/courses
  storedCourses(req, res, next) {
    Course.find({})
      .then((courses) => {
        res.render("me/stored-courses", {
          courses: multipleMongooseToObject(courses),
        });
      })
      .catch(next);
  }
  //[GET] /me/stored/members
  storedMembers(req, res, next) {
    Member.find({})
      .then((members) => {
        res.render("me/stored-members", {
          members: multipleMongooseToObject(members),
        });
      })
      .catch(next);
  }

  //[GET] /me/stored/members
  storedPolicy(req, res, next) {
    Policy.find({})
      .then((policy) => {
        res.render("me/stored-policy", {
          policy: multipleMongooseToObject(policy),
        });
      })
      .catch(next);
  }
}

module.exports = new MeController();
