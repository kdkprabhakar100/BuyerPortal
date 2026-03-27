const User = require("../models/User");

const addFavourite = async (req, res) => {
  const { propertyId } = req.body;

  const user = await User.findById(req.user._id);

  if (!user.favourites.includes(propertyId)) {
    user.favourites.push(propertyId);
    await user.save();
  }

  res.json({ favourites: user.favourites });
};

const removeFavourite = async (req, res) => {
  const { propertyId } = req.body;

  const user = await User.findById(req.user._id);

  user.favourites = user.favourites.filter(
    (id) => id !== propertyId
  );

  await user.save();

  res.json({ favourites: user.favourites });
};

const getFavourites = async (req, res) => {
  const user = await User.findById(req.user._id);
  res.json({ favourites: user.favourites });
};

module.exports = {
  addFavourite,
  removeFavourite,
  getFavourites,
};