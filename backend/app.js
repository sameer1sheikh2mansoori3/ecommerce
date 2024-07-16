const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/error");

const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
app.use(express.json());
app.use("/api/v1", product);
app.use("/api/v1", user);

// error middleware
app.use(errorMiddleware);
module.exports = app;
