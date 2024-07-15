const app = require("./app");
const dotenv = require("dotenv");
const connectDb = require("./config/database");

dotenv.config({
  path: "backend/config/.env",
});
console.log(process.env.PORT);
// const server =

connectDb();
app.listen(process.env.PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});
