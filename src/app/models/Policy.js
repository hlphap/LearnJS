const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slug = require("mongoose-slug-generator");

mongoose.plugin(slug);
const Policy = new Schema({
  name: { type: String, required: true },
  orderPerMonthMin: { type: Number },
  orderPerMonthMax: { type: Number },
  ratioCommission: { type: Number },
  note: { type: String },
});

module.exports = mongoose.model("Policy", Policy);
