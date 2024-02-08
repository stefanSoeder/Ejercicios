const BarRoutes = require("express").Router();
const { upload } = require("../../middleware/files.middleware");
const {
  createBar,
  toggleBeer,
  getById,
  getAll,
  getByName,
  deleteBar,
} = require("../controllers/Bar.Controller");

BarRoutes.post("/bar", upload.single("image"), createBar);
BarRoutes.patch("/add/:id", toggleBeer);
BarRoutes.get("/:id", getById);
BarRoutes.get("/", getAll);
BarRoutes.get("/byName/:name", getByName);
BarRoutes.delete("/:id", deleteBar);

module.exports = BarRoutes;
