const express = require("express");
const router = express.Router();

const controller = require("../controller/userProfile");

router.post("/login", controller.login);
router.post("/register", controller.register);
router.post("/create", controller.createUser);
router.patch("/update/:id", controller.editUser);
router.delete("/delete/:id", controller.deleteUser);
router.get("/getUser/:id", controller.getUser);
router.patch("/editPw/", controller.editPassword);

// view service records/

module.exports = router;
