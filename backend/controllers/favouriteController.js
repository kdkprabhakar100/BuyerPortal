const User = require("../models/User");

const addFavourite = async (req, res) => {
  try {
    const { propertyId } = req.body;

    console.log("BODY:", req.body);

    if (!propertyId) {
      return res.status(400).json({ message: "Property ID missing" });
    }

    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (!user.favourites.map(id => id.toString()).includes(propertyId)) {
      user.favourites.push(propertyId);
      await user.save();
    }

    res.json({ favourites: user.favourites });

  } catch (err) {
    console.error("ADD ERROR:", err); // 👈 FULL error log
    res.status(500).json({ message: err.message });
  }
};

const getFavourites = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res.json({ favourites: user.favourites });
  } catch (err) {
    console.error("GET ERROR:", err.message);
    res.status(500).json({ message: err.message });
  }
};

const removeFavourite = async (req, res) => {
  try {
    const { propertyId } = req.body;

    const user = await User.findById(req.user.id);

    user.favourites = user.favourites.filter(
      (id) => id.toString() !== propertyId
    );

    await user.save();

    res.json({ favourites: user.favourites });
  } catch (err) {
    console.error("REMOVE ERROR:", err.message);
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  addFavourite,
  removeFavourite,
  getFavourites,
};
