const Beer = require("../models/Beer.model");
const validator = require("validator");
const dotenv = require("dotenv");
const enumOk = require("../../utils/enumOk");
dotenv.config();

const createBeer = async (req, res, next) => {
  let catchImg = req.file?.path;
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

    if (req.file) {
      newBeer.image = req.file.path;
    } else {
      newBeer.image =
        "https://res.cloudinary.com/dhu1it9x8/image/upload/v1707250175/comida_lddnvo.png";
    }

    try {
      const saveBeer = await newBeer.save();
      if (saveBeer) {
        return res.status(200).json(saveBeer);
      } else {
        return res.status(404).json("Not able to save new beer ❌");
      }
    } catch (error) {
      return res.status(404).json("error general saved beer");
    }
  } catch (error) {
    req.file?.path && deleteImgCloudinary(catchImg);
    return (
      res.status(404).json({
        message: "Error creating element",
        error: error,
      }) && next(error)
    );
  }
};

module.exports = { createBeer };
