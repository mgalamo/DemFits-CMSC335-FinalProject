const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;
const app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));

// serve static assets (css, images, etc.) from project root
app.use(express.static(path.resolve(__dirname)));

app.get("/", (req, res) => {
  res.send("index.html");
});

app.get("/placeorder", (req, res) => {
  res.render("placeorder");
});

app.get("/getinspirations", (req, res) => {
  res.render("getinspirations");
});

app.get("/reviewdates", (req, res) => {
  res.render("reviewdates");
});

app.get("/cancelorder", (req, res) => {
  res.render("cancelorder");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
