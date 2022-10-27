const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./Routers/UserRoutes.js");

const app = express();
app.use(express.json());
dotenv.config();
app.use(cors());

mongoose
  .connect(process.env.MONGODB)
  .then(() => console.log("mongodb connected successfully"));

app.use("/user", userRoutes);

app.listen(process.env.PORT, () =>
  console.log("The server is running on the port " + process.env.PORT)
);
