const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const socialProfileSchema = new Schema({
  userId: { type: Schema.Types.ObjectId },
  linkedin: {
    type: String,
    required: [true, "linkedin field is required"],
  },
  facebook: {
    type: String,
    required: [true, "facebook field is required"],
  },
  twitter: {
    type: String,
    required: [true, "twitter field is required"],
  },
  instagram: {
    type: String,
    required: [true, "instagram field is required"],
  },
  create_date:{
    type: Date,
    default: Date.now
  }
});

const socialProfile = mongoose.model("socialProfile", socialProfileSchema);
module.exports = socialProfileSchema;
