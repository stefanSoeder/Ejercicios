const Beer = require("../models/Beer.model");

const createBeer = async (req, res, next) => {
  try {
    await Beer.syncIndexes();

    /** hacemos una instancia del modelo  */
    const customBody = {
      name: req.body?.name,
      country: req.body?.country,
      style: req.body?.style,
      alcohol: req.body?.alcohol,
      craftBeer: req.body?.craftBeer,
      image: req.body?.image,
    };
    const newBeer = new Beer(customBody);
    const savedBeer = await newBeer.save();

    if (req.file) {
      newBeer.image = req.file.path;
    } else {
      newBeer.image =
        "https://res.cloudinary.com/dhu1it9x8/image/upload/v1707250175/comida_lddnvo.png";
    }

    // test en el runtime
    return res
      .status(savedBeer ? 200 : 404)
      .json(savedBeer ? savedBeer : "error creating beer");
  } catch (error) {
    return res.status(404).json({
      error: "error catch create beer",
      message: error.message,
    });
  }
};

module.exports = { createBeer };
