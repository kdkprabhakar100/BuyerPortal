const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const favouriteController = require("../controllers/favouriteController");

router.post("/add", protect, favouriteController.addFavourite);
router.post("/remove", protect, favouriteController.removeFavourite);
router.get("/", protect, favouriteController.getFavourites);

module.exports = router;