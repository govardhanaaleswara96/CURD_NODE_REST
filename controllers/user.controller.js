const User = require("../models/user.models");
const bcrypt = require("bcrypt");

const test = (req, res) => {
  res.send("Test Controller Worked !");
};
// create data
const create = (req, res, next) => {
  //hashSync(request.body.password, 10);
  req.body.password = bcrypt.hashSync(req.body.password, 10);
  // req.body.password = hashPass;
  // console.log(hashPass);
  const user = new User(req.body);
  //console.log(user);
  user
    .save()
    .then(() => {
      res.send("Data Created Successfully");
    })
    .catch(() => {
      res.send("Something Went To Wrong");
    });
};
// get data
const getUsers = (req, res, next) => {
  User.find()
    .then(user => {
      res.send(user);
    })
    .catch(err => {
      res.status(500).send("Data Not Found");
    });
};

//get particular data
const getParticularUser = (req, res, next) => {
  const id = req.params.id;
  User.findById(id)
    .then(users => {
      res.send(users);
    })
    .catch(err => {
      res.send("Something Went To Wrong!");
    });
};
// update data
const updateUser = (req, res, next) => {
  req.body.password = bcrypt.hashSync(req.body.password, 10);
  const id = req.params.id;
  const body = req.body;
  User.findByIdAndUpdate(id, { $set: body })
    .then(data => {
      res.send("Data Updated");
    })
    .catch(err => {
      res.send("Data Not Updated");
    });
};

// delete data
const deleteUser = (req, res, next) => {
  const id = req.params.id;
  User.findByIdAndDelete(id)
    .then(() => {
      res.send("data deleted successfully");
    })
    .catch(() => {
      res.send("data not deleted ");
    });
};
module.exports = {
  test: test,
  create: create,
  getUsers: getUsers,
  getParticularUser: getParticularUser,
  deleteUser: deleteUser,
  updateUser: updateUser
};
