const { json } = require("express");
const {
  multipleMongooseToObject,
  mongooseToObject,
} = require("../../util/mongoose");

const Policy = require("../models/Policy");

class PolicyController {
  //[GET] /Policy
  index(req, res, next) {
    Policy.find({})
      .then((Policy) => {
        console.log(Policy);
        res.json(Policy);
      })
      .catch(next);
  }
  //[GET] /policy/create
  create(req, res, next) {
    res.render("policy/create");
  }

  //[POST] /policy/stored
  store(req, res, next) {
    const formData = req.body;
    const policy = new Policy(formData);
    policy
      .save()
      .then(() => res.json({ result: 1 }))
      .catch(() => res.json({ result: 0 }));
  }

  //[GET] /policy/:id/edit
  edit(req, res, next) {
    Policy.findById(req.params.id)
      .then((policy) =>
        res.render("policy/edit", { policy: mongooseToObject(policy) })
      )
      .catch(next);
  }

  //[PUT] /policy/:id
  update(req, res, next) {
    Policy.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.json({ result: 1 }))
      .catch(() => res.json({ result: 0 }));
  }

  //[DELETE] /policy/:id
  delete(req, res, next) {
    Policy.deleteOne({ _id: req.params.id })
      .then(() => res.json({ result: 1 }))
      .catch(() => res.json({ result: 0 }));
  }
}

module.exports = new PolicyController();
