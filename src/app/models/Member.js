const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slug = require("mongoose-slug-generator");

mongoose.plugin(slug);
const Member = new Schema(
  {
    name: {
      type: String
    },
    phone: {
      type: String
    },
    email: {
      type: String
    },
    image: {
      type: String
    },
    slug: {
      type: String,
      slug: "name",
      unique: true
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Member", Member);
