const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose")
dotenv.config()

const app = express();
mongoose.connect(process.env.MONGODB).then(() => console.log("mongodb connected successfully"));


app.listen(process.env.PORT,() => console.log("The server is running on the port " + process.env.PORT));