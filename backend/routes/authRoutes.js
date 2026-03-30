const express = require("express");
const router = express.Router();


const { registerUser, loginUser, getUserCount} = require("../controllers/authController");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/users/count", getUserCount);

module.exports = router;