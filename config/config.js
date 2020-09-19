const dotEnv = require("dotenv");
dotEnv.config();

const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log(`mongoo db connected on ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = {
  connectDB: connectDB,
  port: process.env.APP_PORT || 3000,
};
