const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://hlphap:JsfFNxq6LBdzfjcz@learnjs.szfw4.mongodb.net/f8_education_de?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      }
    );
    console.log("connected");
  } catch (error) {
    console.log(error);
  }
}

module.exports = { connect };
