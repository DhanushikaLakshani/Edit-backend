const SocialProfile = require("../model/user-profile");
const bcrypt = require("bcryptjs");

exports.editSocial = async (req, res) => {
  const id = req.params.id;
  const socialData = req.body;
  try {
    const editUser = await SocialProfile.findByIdAndUpdate(
      id,
      { ...socialData },
      { runValidators: true, new: true },
    );

    res.send({ data: editUser, message: "", status: "SUCCESS" });
  } catch (error) {
    res.status(500).send({ message: error.message, status: "FAILED" });
  }
};
