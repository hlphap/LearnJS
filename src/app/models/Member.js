const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slug = require("mongoose-slug-generator");

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

//Add plugin
mongoose.plugin(slug);
module.exports = mongoose.model("Member", Member);
