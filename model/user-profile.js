const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userProfileSchema = new Schema({
  email: {
    type: String,
  },
  nic: {
    type: String,
  },
  password: {
    type: String,
  },
  name: {
    type: String,
  },
  location: {
    type: String,
  },
  bio: {
    type: String,
  },
  webUrl: {
    type: String,
  },
  portfolioUrl: {
    type: String,
  },
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

const userProfile = mongoose.model("userProfile", userProfileSchema);
module.exports = userProfile;
