const express = require("express");
const router = express.Router();

const controller = require("../controller/socialProfile");

router.patch("/update/:id", controller.editSocial);

// view service records/

module.exports = router;
