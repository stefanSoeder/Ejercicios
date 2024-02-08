const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MenssageSchema = new Schema(
  {
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    type: {
      type: String,
      enum: ["private", "public"],
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    recipientCharacter: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Character",
    },
    recipientBar: { type: mongoose.Schema.Types.ObjectId, ref: "Bar" },
    recipientUser: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  {
    timestamps: true,
  }
);

const Menssage = mongoose.model("Menssage", MenssageSchema);
module.exports = Menssage;
