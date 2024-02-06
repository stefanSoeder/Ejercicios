const bcrypt = require(`bcrypt`);
const validator = require(`validator`);
const mongoose = require(`mongoose`);
const BarSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      validate: [validator.isEmail, `Email not valid`],
    },
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    location: {
      type: String,
      required: true,
      trim: true,
      validator: [
        validator.isLatLong,
        `Is not a valid latitude-longitude coordinate in the format lat,long or lat, long.`,
      ],
    },
    genre: {
      type: String,
      enum: [
        "Irish Pub",
        "Speakeasy",
        "Cocktail Bar",
        "Bar de Tapas",
        "Restaurant",
      ],
      required: true,
    },
    services: {
      type: String,
      enum: ["billiards", "pool", "karaoke", "arcade games", "live music"],
      default: "None",
    },
    opens: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      validate: [validator.isTime, `Not a time format`],
    },
    closes: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      validate: [validator.isTime, `Not a time format`],
    },

    patio: {
      type: Boolean,
      default: false,
    },
    image: {
      type: String,
    },
    beers: [{ type: mongoose.Schema.Types.ObjectId, ref: "Beer" }],
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

const Bar = mongoose.model(`Bar`, BarSchema);
module.exports = Bar;
