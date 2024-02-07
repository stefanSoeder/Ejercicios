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
    console.log(newBeer);
    try {
      const saveBeer = await newBeer.save();
      if (saveBeer) {
        return res.status(200).json(saveBeer);
      } else {
        return res.status(404).json("Not able to save new beer ❌");
      }
    } catch (error) {
      console.log("🚀 ~ createBeer ~ error:", error);
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

//!---------
//?GET BY ID
//!---------

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const beerById = await Beer.findById(id);
    if (beerById) {
      return res.status(200).json(beerById);
    } else {
      return res.status(404).json("Beer not found");
    }
  } catch (error) {
    return res.status(404).json(error.message);
  }
};

//!-------
//?GET ALL
//!-------

const getAll = async (req, res, next) => {
  try {
    const allBeer = await Beer.find().populate("bars");
    /** el find nos devuelve un array */
    if (allBeer.length > 0) {
      return res.status(200).json(allBeer);
    } else {
      return res.status(404).json("No beers found");
    }
  } catch (error) {
    return res.status(404).json({
      error: "error al buscar - lanzado en el catch",
      message: error.message,
    });
  }
};

//!-----------
//?GET BY NAME
//!-----------
const getByName = async (req, res, next) => {
  try {
    const { name } = req.params;

    /// nos devuelve un array de elementos
    const beerByName = await Beer.find({ name });
    if (beerByName.length > 0) {
      return res.status(200).json(beerByName);
    } else {
      return res.status(404).json("Beer not found");
    }
  } catch (error) {
    return res.status(404).json({
      error: "error al buscar por nombre capturado en el catch",
      message: error.message,
    });
  }
};

module.exports = { createBeer, getById, getAll, getByName };
