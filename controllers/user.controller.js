const Product = require("../models/user.model");

// let test = (req, res) => {
//   res.send("Router With Controller Working");
// };

// let create = (req, res, next) => {
//   let user = new User({
//     name: req.body.name,
//     price: req.body.price
//   });
//   user.save(err => {
//     if (err) return next(err);
//     res.send("Data created Successfully");
//   });
// };
exports.product_create = (req, res, next) => {
  let product = new Product({
    name: req.body.name,
    price: req.body.price
  });
  product.save(err => {
    if (err) {
      return next(err);
    }
    res.send("Data Created Successfully");
  });
};
// module.exports = {
//   test: test,
//   create: create
// };
