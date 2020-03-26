const mongoose = require("mongoose");
const schema = mongoose.Schema;
const unique = require("mongoose-unique-validator");
const bcrypt = require("bcrypt");

mongoose
  .connect("mongodb://localhost:27017/user_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
  })
  .then(() => {
    console.log("DB Connected");
  })
  .catch(() => {
    console.log("DB Not Connected");
  });
const userSchema = new schema(
  {
    name: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true
    },
    dob: { type: String, required: true, trim: true },
    age: { type: Number, required: true, trim: true },
    gender: { type: String, required: true, trim: true },
    password: { type: String, required: true, trim: true, bcrypt: true },
    countrycode: { type: Number, required: true, trim: true },
    contactnumber: { type: Number, required: true, trim: true },
    skills: { type: Array, required: true, trim: true },
    address: { type: String, required: true, trim: true },
    pincode: { type: String, required: true, trim: true },
    location: { type: Object, required: true, trim: true }
  },
  {
    timestamps: true
  }
);
// userSchema.plugin(bcrypt);

module.exports = mongoose.model("User", userSchema);
