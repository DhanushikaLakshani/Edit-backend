const UserProfile = require("../model/user-profile");
const bcrypt = require("bcryptjs");

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const findUser = await UserProfile.findOne({ email });
    if (!findUser) {
      return res.status(404).send({ message: "Can not find the user", status: "FAILED" });
    }

    const isCorrect = await bcrypt.compare(password, findUser.password);
    if (!isCorrect) {
      return res.status(404).send({ message: "", status: "FAILED" });
    }

    res.send({ data: findUser, message: "" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.register = async (req, res) => {
  const { email, password, name } = req.body;

  try {
    const findUser = await UserProfile.findOne({ email });
    if (findUser) {
      return res
        .status(402)
        .send({ message: "User For this email is already there", status: "FAILED" });
    }

    const hasPassword = await bcrypt.hash(password, 8);
    const customer = new UserProfile({ email, name, password: hasPassword });
    const save = await customer.save();
    res.send({ data: save });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

exports.createUser = async (req, res) => {
  const { email, bio, name, nic, location, portfolioUrl, webUrl } = req.body;

  try {
    const findUser = await UserProfile.findOne({ email });
    if (findUser) {
      return res
        .status(402)
        .send({ message: "User For this email is already there", status: "FAILED" });
    }
    const user = new UserProfile({ email, bio, name, nic, location, portfolioUrl, webUrl });
    const savedUser = await user.save();
    res.send({ data: savedUser, message: "", status: "SUCCESS" });
  } catch (error) {
    res.status(500).send({ message: error.message, status: "FAILED" });
  }
};

exports.editPassword = async (req, res) => {
  const { oldPassword, newPassword, email, id } = req.body;

  try {
    const findUser = await UserProfile.findOne({ email });
    if (!findUser) {
      return res.status(402).send({ message: "", status: "FAILED" });
    }
    console.log("===========");
    console.log(req.body);
    const isCorrect = await bcrypt.compare(oldPassword, findUser.password);
    console.log("===========");
    if (!isCorrect) {
      return res.status(404).send({ message: "", status: "FAILED" });
    }

    const hasPW = await bcrypt.hash(newPassword, 8);

    const newUser = await UserProfile.findByIdAndUpdate(
      id,
      { password: hasPW },
      { runValidators: true, new: true },
    );
    res.send({ data: newUser, message: "", status: "SUCCESS" });
  } catch (error) {
    res.status(500).send({ message: error.message, status: "FAILED" });
  }
};

exports.getUser = async (req, res) => {
  const { id } = req.params;

  try {
    const findUser = await UserProfile.findById(id);
    if (!findUser) {
      return res.status(404).send({ message: "", status: "FAILED" });
    }

    res.send({ data: findUser, message: "", status: "SUCCESS" });
  } catch (error) {
    res.status(500).send({ message: error.message, status: "FAILED" });
  }
};

exports.editUser = async (req, res) => {
  const id = req.params.id;
  const userData = req.body;
  try {
    const editUser = await UserProfile.findByIdAndUpdate(
      id,
      { ...userData },
      { runValidators: true, new: true },
    );

    res.send({ data: editUser, message: "", status: "SUCCESS" });
  } catch (error) {
    res.status(500).send({ message: error.message, status: "FAILED" });
  }
};

exports.deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    const customer = await UserProfile.findByIdAndDelete(id);
    res.send({ data: customer, status: "SUCCESS", message: "" });
  } catch (error) {
    res.status(500).send({ message: error.message, status: "FAILED" });
  }
};
