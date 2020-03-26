const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const port = 3000;
const router = require("./routes/user.router");
const app = express();

app.use(express.static("views"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/user", router);
app.listen(port, () => {
  console.log(`Server is running ${port}`);
});
