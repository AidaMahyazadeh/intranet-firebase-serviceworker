const express = require("express");
const router = express.Router();
const signupController = require("../controllers/signupController");
const loginController = require("../controllers/loginController");
const logoutController = require("../controllers/logoutController");

router.post("/signup", signupController);
router.post("/login", loginController);
router.post("/logout", logoutController);

module.exports = router;
