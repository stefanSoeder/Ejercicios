const Bar = require("../models/Bar.model");

const createBar = async (req, res, next) => {
  try {
    await Bar.syncIndexes();

    /** hacemos una instancia del modelo  */
    const customBody = {
      email: req.body?.name,
      name: req.body?.name,
      location: req.body?.location,
      genre: req.body?.genre,
      services: req.body?.services,
      opens: req.body?.opens,
      closes: req.body?.closes,
      patio: req.body?.patio,
      image: req.body?.image,
    };
    const newBar = new Bar(customBody);
    const savedBar = await newBar.save();

    // test en el runtime
    return res
      .status(savedBar ? 200 : 404)
      .json(savedBar ? savedBar : "error creating bar");
  } catch (error) {
    return res.status(404).json({
      error: "error catch create bar",
      message: error.message,
    });
  }
};

module.exports = { createBar };
