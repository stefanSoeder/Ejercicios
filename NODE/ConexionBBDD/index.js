const express = require("express");
const dotenv = require("dotenv");
const { connect } = require("./src/utils/db");
const cors = require("cors");
//*creamos el servidor web*/
const app = express();
//* configurar dotenv*/
dotenv.config();

//! conectamos con la base de datos
connect();

//! ----------------- CONFIGURAR CLOUDINARY--------
const { configCloudinary } = require("./src/middleware/files.middleware");

configCloudinary();

const PORT = process.env.PORT;
app.use(cors());

app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ limt: "5mb", extended: false }));
app.disable("x-powered-by");
app.listen(PORT, () =>
  console.log(`Server listening on port 👌🔍 http://localhost:${PORT}`)
);

const UserRoutes = require("./src/api/routes/User.routes");
app.use("/api/v1/users/", UserRoutes);

const BarRoutes = require("./src/api/routes/Bar.routes");
app.use("/api/v1/bar/", BarRoutes);

const BeerRoutes = require("./src/api/routes/Beer.routes");
app.use("/api/v1/beer/", BeerRoutes);

const MessageRoutes = require("./src/api/routes/Message.routes");
app.use("/api/v1/message/", MessageRoutes);

app.use("*", (req, res, next) => {
  const error = new Error("Route not found");
  error.status = 404;
  return next(error);
});
app.use((error, req, res) => {
  return res
    .status(error.status || 500)
    .json(error.message || "unexpected error");
});
