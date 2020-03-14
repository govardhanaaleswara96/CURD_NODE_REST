const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const port = 1300;
const userRouter = require("./routes/user.routes");

const app = express();
app.use(express.static("views"));
mongoose
  .connect("mongodb://localhost:27017/user_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
  })
  .then(() => {
    console.log("Db Connect Made Successfully");
  })
  .catch(() => {
    console.log("Db Connection Not Successfully");
    process.exit(-1);
  });
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/user", userRouter);
app.listen(port, () => {
  console.log(`Server Listening  Port Number ${port}`);
});
