const BeerRoutes = require("express").Router();
const { upload } = require("../../middleware/files.middleware");
const {
  createBeer,
  getById,
  getAll,
  getByName,
} = require("../controllers/Beer.controller");

BeerRoutes.post("/beer", upload.single("image"), createBeer);
BeerRoutes.get("/:id", getById);
BeerRoutes.get("/", getAll);
BeerRoutes.get("/byName/:name", getByName);
module.exports = BeerRoutes;
