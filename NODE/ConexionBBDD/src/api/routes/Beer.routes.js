const BeerRoutes = require("express").Router();
const { upload } = require("../../middleware/files.middleware");
const { createBeer } = require("../controllers/Beer.controller");

BeerRoutes.post("/beer", upload.single("image"), createBeer);

module.exports = BeerRoutes;
