const Bar = require("../models/Bar.model");
const validator = require("validator");
const dotenv = require("dotenv");
const enumOk = require("../../utils/enumOk");
dotenv.config();

const createBar = async (req, res, next) => {
  let catchImg = req.file?.path;
  try {
    await Bar.syncIndexes();
    console.log("XXXXX", req.body);
    /** hacemos una instancia del modelo  */
    const customBody = {
      email: req.body?.email,
      name: req.body?.name,
      location: req.body?.location,
      genre: req.body?.genre,
      services: req.body?.services,
      opens: req.body?.opens,
      closes: req.body?.closes,
      patio: req.body?.patio,
    };
    const newBar = new Bar(customBody);
    if (req.file) {
      newBar.image = catchImg;
    } else {
      newBar.image =
        "https://res.cloudinary.com/dhu1it9x8/image/upload/v1707250175/pub_urp664.png";
    }
    // test en el runtime
    console.log(newBar);
    try {
      const saveBar = await newBar.save();
      if (saveBar) {
        return res.status(200).json(saveBar);
      } else {
        return res.status(404).json("Not able to save new bar ❌");
      }
    } catch (error) {
      console.log("🚀 ~ createBar ~ error:", error);
      return res.status(404).json("error general saved bar");
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

module.exports = { createBar };
