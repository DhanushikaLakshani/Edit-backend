const express = require("express");
const mongoose = require("mongoose");
const app = express();
const userProfile = require("./router/userProfile");
const socialProfile = require("./router/socialProfile");
const cors = require("cors");
require("dotenv").config();

const port = 4000 || process.env.PORT;

app.use(express.json());
app.use(cors());

app.use("/user", userProfile);
app.use("/social", socialProfile);

app.listen(port, () => {
  mongoose
    .connect(process.env.DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("connect ", port);
    })
    .catch((error) => {
      console.log(error);
    });
});
