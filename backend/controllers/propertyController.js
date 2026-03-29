const Property = require("../models/Property");

const addProperty = async (req, res) => {
  try {
    const { title, price, image } = req.body;

    const property = new Property({
      title,
      price,
      image,
    });

    await property.save();

    res.json(property);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { addProperty };