const mongoose = require("mongoose");
const { DB_NAME } = require("../constant/db");
const connectDb = async () => {
  try {
    const res = await mongoose.connect(`${process.env.MONGO_URL}/newDb`);
    const data = res.connection.host;
    console.log(`server is running at `, data);
  } catch (error) {
    throw new Error(error.message);
    console.log("error while connecting database", error.message);
  }
};
module.exports = connectDb;
