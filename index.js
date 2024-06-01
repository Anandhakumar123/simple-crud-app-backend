const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");

// const { config } = require("dotenv");
// config();
//----------------or-----------------
require("dotenv").config();

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // this middleware for - form url encoded req

//routes
app.use("/api/products", productRoute);

//http://localhost:3000/          <--req example
app.get("/", (req, res) => {
  res.send("Hello from Node API");
});

mongoose
  .connect(process.env.mongodb)
  .then(() => {
    console.log("Connected to database");
    app.listen(process.env.PORT, () => {
      console.log("Server is running on the port 3000");
    });
  })
  .catch(() => {
    console.log("Connection Failed");
  });
