const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const socialProfileSchema = new Schema({
  userId: { type: Schema.Types.ObjectId },
  linkedin: {
    type: String,
  },
  facebook: {
    type: String,
  },
  twitter: {
    type: String,
  },
  instagram: {
    type: String,
  },
});

const socialProfile = mongoose.model("socialProfile", socialProfileSchema);
module.exports = socialProfileSchema;
