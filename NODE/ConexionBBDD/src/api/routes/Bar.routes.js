const BarRoutes = require("express").Router();
const { upload } = require("../../middleware/files.middleware");
const { createBar } = require("../controllers/Bar.Controller");

BarRoutes.post("/bar", upload.single("image"), createBar);

module.exports = BarRoutes;
