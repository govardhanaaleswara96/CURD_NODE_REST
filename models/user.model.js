// // const mongoose = require("mongoose");
// // const schema = mongoose.Schema;
// // const bcrypt = require("bcrypt");
// // const unique = require("mongoose-unique-validator");

// // const userSchema = new schema(
// //   {
// //     name: { type: String, trim: true },
// //     email: { type: String, trim: true },
// //     dob: { type: String, trim: true },
// //     age: { type: String, trim: true },
// //     password: { type: String, trim: true },
// //     gender: { type: String, trim: true },
// //     countrycode: { type: String, trim: true },
// //     contactnumber: { type: String, trim: true },
// //     skills: { type: Array, trim: true },
// //     address: { type: String, trim: true },
// //     pincode: { type: String, trim: true },
// //     location: { type: Object, trim: true }
// //   },
// //   { timestamps: true }
// // );
// // // userSchema.plugin(bcrypt);

// // module.exports = mongoose.model("User", userSchema);
// const mongoose = require("mongoose");
// const schema = mongoose.Schema;

// const userSchema = new schema(
//   {
//     name: { type: String, required: true, trim: true }
//   },
//   { timestamps: true }
// );
// module.exports = mongoose.model("user", userSchema);
const mongoose = require("mongoose");
const schema = mongoose.Schema;

const ProductSchema = new schema(
  {
    name: { type: String, required: true, max: 100 },
    price: { type: String, required: true }
  },
  { timestamps: true }
);

// export model
module.exports = mongoose.model("Product", ProductSchema);
