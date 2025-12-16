const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("index.html");
});

router.get("/placeorder", (req, res) => {
  res.render("placeorder");
});

router.get("/getinspirations", (req, res) => {
  res.render("getinspirations");
});

router.get("/reviewdates", (req, res) => {
  res.render("reviewdates");
});

router.get("/cancelorder", (req, res) => {
  res.render("cancelorder");
});

module.exports = router;
