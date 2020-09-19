const dotEnv = require("dotenv");
dotEnv.config();

let mongoURL = process.env.MONGO_URL;
const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log(`mongoo db connected on ${mongoURL}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = {
  connectDB: connectDB,
  port: process.env.APP_PORT || 3000,
};
