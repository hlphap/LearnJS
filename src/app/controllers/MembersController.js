const Member = require("../models/Member");
const {
  multipleMongooseToObject,
  mongooseToObject,
} = require("../../util/mongoose");

class MembersController {
  //[GET] /members
  index(req, res, next) {
    Member.find({})
      .then((members) => {
        res.render("members", { members: multipleMongooseToObject(members) });
      })
      .catch(next);
  }

  //[GET] /members/slug
  show(req, res, next) {
    Member.findOne({ slug: req.params.slug })
      .then((member) =>
        res.render("member/show", { member: mongooseToObject(member) })
      )
      .catch(next);
  }

  //[GET] /members/create
  create(req, res, next) {
    res.render("member/create");
  }

  //[POST] /members/store
  store(req, res, next) {
    const formData = req.body;
    const member = new Member(formData);
    member
      .save()
      .then(() => res.redirect("/members"))
      .catch(next);
  }

  //[GET] /members/:id/edit
  edit(req, res, next) {
    Member.findById(req.params.id)
      .then((member) =>
        res.render("member/edit", { member: mongooseToObject(member) })
      )
      .catch(next);
  }

  //[PUT] /members/:id
  update(req, res, next) {
    Member.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect("/me/stored/members"))
      .catch(next);
  }
}

module.exports = new MembersController();
