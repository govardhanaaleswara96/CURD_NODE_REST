const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

// router.get("/test", userController.test);
router.post("/", userController.product_create);

module.exports = router;
