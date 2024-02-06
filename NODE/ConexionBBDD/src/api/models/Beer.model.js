const bcrypt = require(`bcrypt`);
const validator = require(`validator`);
const mongoose = require(`mongoose`);
const BeerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    country: {
      type: String,
      required: true,
      trim: true,
    },
    style: {
      type: String,
      enum: ["Stout", "Lager", "IPA", "Red", "Wheat", "Pale Ale"],
      required: true,
    },
    alcohol: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    addedFlavours: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    craftBeer: {
      type: Boolean,
      default: false,
    },
    image: {
      type: String,
    },
    bars: [{ type: mongoose.Schema.Types.ObjectId, ref: "Bar" }],
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

const Beer = mongoose.model(`Beer`, BeerSchema);
module.exports = Beer;
