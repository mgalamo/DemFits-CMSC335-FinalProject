const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config({ path: path.resolve(__dirname, "utils/mongo.env") });
const routes = require("./routes");
const Order = require("./model/order");
const PORT = process.env.PORT || 3000;
const app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));

// serve static assets (css, images, etc.) from project root
app.use(express.static(path.resolve(__dirname)));

// Use the router
app.use("/", routes);

// MongoDB connection and server startup
mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING)
  .then(() => {
    console.log("MongoDB connected successfully");
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });
