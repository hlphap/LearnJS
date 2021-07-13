const mongoose = require("mongoose");

function connect() {
  mongoose.connect("mongodb://localhost:27017/f8_education_de", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
    .then(() => {
      console.log(`✅Connected Successfully`);
    })
    .catch((error) => {
      console.log(`❌Connect is failed ${error}`)
    })
}
module.exports = { connect };