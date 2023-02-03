const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userProfileSchema = new Schema({
  email: {
    type: String,
    required: [true, "Email field is required"],
    unique: false
  },
  nic: {
    type: String,
    required: [false, "nic field is required"],
  },
  password: {
    type: String,
  },
  name: {
    type: String,
    required: [true, "Name field is required"],
    maxLength: 50
  },
  location: {
    type: String,
    required: [true, "Location field is required"],
    minLength: 5
  },
  bio: {
    type: String,
    required: [true, "bio field is required"],
  },
  webUrl: {
    type: String,
    required: [true, "personalwebsite field is required"],
  },
  portfolioUrl: {
    type: String,
    required: [true, "portfolioURL field is required"],
  },
  create_date:{
    type: Date,
    default: Date.now
  }
  
});

const userProfile = mongoose.model("userProfile", userProfileSchema);
module.exports = userProfile;
