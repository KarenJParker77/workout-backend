const express = require("express");

const router = express.Router();

// controller functions

const { signupUser, loginUser } = require("../controllers/usercontroller");

// login
router.post("/login", loginUser);

// sign up
router.post("/signup", signupUser);

module.exports = router;
