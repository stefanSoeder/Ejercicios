const expresss = require("express");
const dotenv = require("dotenv");
const { connect } = require("./src/utils/db");
const app = expresss();
dotenv.config();
connect();
