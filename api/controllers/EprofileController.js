const {default: mongoose} = require("mongoose");
const {Profile} = require('../models/EProfileModel');

exports.registerProfile = async(req, res) => {
    const profile = new Profile(req.body);

    await profile.save((err, doc) => {
        if(err){
            return res.status(422).json({
                success: false,
                message: "Enter valied details!",
                data: err
            });
        }else{
            return res.status(200).json({
                success: true,
                message: "Successfully Registered"
            });
        };
    });
};

