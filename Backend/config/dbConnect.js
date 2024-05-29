// const mongoose = require("mongoose");
// const express = require("express");
// const router = express.Router();

import mongoose  from "mongoose";


const URI =process.env.MONGODBURI;

mongoose.connect(URI)
  .then(() => console.log("connected.....!"))
  .catch((err) => console.log(err));

module.exports = mongoose;
