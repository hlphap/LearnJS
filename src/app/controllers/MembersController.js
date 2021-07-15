const Member = require("../models/Member");
const {
  multipleMongooseToObject,
  mongooseToObject,
} = require("../../util/mongoose");

class MembersController {
  //[GET] /members
  async index(req, res, next) {
    const members = await Member.find({})
    return res.render("members", { members: multipleMongooseToObject(members) });
  }

  //[GET] /members/:id
  async show(req, res, next) {
    const { id } = req.params;
    const member = await Member.findOne({ slug: id });
    return res.render("member/show", { member: mongooseToObject(member) })
  }

  //[GET] /members/create
  create(req, res, next) {
    return res.render("member/create");
  }

  //[POST] /members/store
  async store(req, res, next) {
    const { name, phone, email, image } = req.body;
    const member = new Member({ name, phone, email, image });
    await member.save();
    return res.redirect("/members")
  }

  //[GET] /members/:id/edit
  async edit(req, res, next) {
    const { id } = req.params;
    const member = await Member.findById(req.params.id);
    return res.render("member/edit", { member: mongooseToObject(member) });
  }

  //[PUT] /members/:id
  async update(req, res, next) {
    const { id } = req.params;
    const { name, phone, email, image } = req.body;
    await Member.findByIdAndUpdate(id, { name, phone, email, image })
    return res.redirect("/me/stored/members");
  }
}

module.exports = new MembersController();
