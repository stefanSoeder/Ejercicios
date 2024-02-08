const Bar = require("../models/Bar.model");
const validator = require("validator");
const dotenv = require("dotenv");
const enumOk = require("../../utils/enumOk");
const Beer = require("../models/Beer.model");
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

//!--------
//? Toggle
//!--------
const toggleBeer = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { beers } = req.body;
    const barById = await Bar.findById(id);
    if (barById) {
      const arrayIdBeers = beers.split(",");
      Promise.all(
        arrayIdBeers.map(async (beer, index) => {
          if (barById.beers.includes(beer)) {
            try {
              await Bar.findByIdAndUpdate(id, {
                $pull: { beers: beer },
              });
              try {
                await Beer.findByIdAndUpdate(beer, {
                  $pull: { Bars: id },
                });
              } catch (error) {
                res.status(404).json({
                  error: "error update beer",
                  message: error.message,
                }) && next(error);
              }
            } catch (error) {
              res.status(404).json({
                error: "error update bar",
                message: error.message,
              }) && next(error);
            }
          }
        })
      )
        .catch((error) => res.status(404).json(error.message))
        .then(async () => {
          return res.status(200).json({
            dataUpdate: await Bar.findById(id).populate("beers"),
          });
        });
    } else {
      return res.status(404).json("este bar no existe");
    }
  } catch (error) {
    return (
      res.status(404).json({
        error: "error catch",
        message: error.message,
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
    const barById = await Bar.findById(id);
    if (barById) {
      return res.status(200).json(barById);
    } else {
      return res.status(404).json("Bar not found");
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
    const allBar = await Bar.find().populate("beers");
    /** el find nos devuelve un array */
    if (allBar.length > 0) {
      return res.status(200).json(allBar);
    } else {
      return res.status(404).json("No bars found");
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
    const barByName = await Bar.find({ name });
    if (barByName.length > 0) {
      return res.status(200).json(barByName);
    } else {
      return res.status(404).json("Bar not found");
    }
  } catch (error) {
    return res.status(404).json({
      error: "error al buscar por nombre capturado en el catch",
      message: error.message,
    });
  }
};

//!------
//?DELETE
//!------

const deleteBar = async (req, res, next) => {
  try {
    const { id } = req.params;
    const bar = await Character.findByIdAndDelete(id);
    if (bar) {
      // lo buscamos para vr si sigue existiendo o no
      const finByIdbar = await Bar.findById(id);

      try {
        const test = await Beer.updateMany(
          { characters: id },
          { $pull: { characters: id } }
        );
        console.log(test);

        try {
          await User.updateMany({ barsFav: id }, { $pull: { barsFav: id } });

          return res.status(finByIdbar ? 404 : 200).json({
            deleteTest: finByIdbar ? false : true,
          });
        } catch (error) {
          return res.status(404).json({
            error: "error catch update User",
            message: error.message,
          });
        }
      } catch (error) {
        return res.status(404).json({
          error: "error catch update Beer",
          message: error.message,
        });
      }
    }
  } catch (error) {
    return res.status(404).json(error.message);
  }
};

module.exports = {
  createBar,
  toggleBeer,
  getById,
  getAll,
  getByName,
  deleteBar,
};
