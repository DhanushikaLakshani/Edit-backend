var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
require('dotenv').config();



const SALT = 10;

var Schema = mongoose.Schema;
var ProfileSchema = new Schema({
    profile_image:{
        type: String,
        required: false
    },
    fullname:{
        type: String,
        required: [true, "Name field is required"],
        maxLength: 50
    },
    nic:{
        type: String,
        required: [false, "nic field is required"],
    },
    email:{
        type: String,
        required: [true, "Email field is required"],
        unique: false
    },
    location:{
        type: String,
        required: [true, "Location field is required"],
        minLength: 5
    },
    bio:{
        type: String,
        required: [true, "bio field is required"],
        
    },
    personalwebsite:{
        type: String,
        required: [true, "personalwebsite field is required"],
        
    },
    portfolioURL:{
        type:String,
        required: [true, "portfolioURL field is required"],

    },
    create_date:{
        type: Date,
        default: Date.now
    }
});

const Profile = mongoose.model('Profile', ProfileSchema);
module.exports = {Profile};