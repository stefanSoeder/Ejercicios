const bcrypt = require(`bcrypt`);
const validator = require(`validator`);
const mongoose = require(`mongoose`);
const UserSchema = new mongoose.Schema(
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
    password: {
      type: String,
      required: true,
      trim: true,
      validator: [validator.isStrongPassword, `Password`],
    },
    gender: {
      type: String,
      enum: ["hombre", "mujer", "otros"],
      required: true,
    },
    rol: {
      type: String,
      enum: ["admin", "user", "superadmin"],
      default: "user",
    },
    confirmationCode: {
      type: String,
      required: true,
    },
    check: {
      type: Boolean,
      default: false,
    },
    image: {
      type: String,
    },
  },
  { timestamps: true }
);

UserSchema.pre(`save`, async function (next) {
  try {
    this.password = await bcrypt.hash(this.password, 10);
    next();
  } catch (error) {
    next(`Error hashing password`, error);
  }
});

const User = mongoose.model(`User`, UserSchema);
module.exports = User;
