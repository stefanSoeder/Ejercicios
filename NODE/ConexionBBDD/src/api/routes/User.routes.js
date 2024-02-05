const { upload } = require("../../middleware/files.middleware");
const {
  registerLargo,
  register,
  registerWithRedirect,
  sendCode,
  resendCode,
} = require("../controllers/User.controllers");
const express = require(`express`);
const UserRoutes = express.Router();

UserRoutes.post("/registerLargo", upload.single("image"), registerLargo);
UserRoutes.post(`/registerUtil`, upload.single("image"), register);
UserRoutes.get("/register", upload.single("image"), registerWithRedirect);

UserRoutes.get("/register/sendMail/:id", sendCode);
UserRoutes.post("/resend", resendCode);

module.exports = UserRoutes;