const path = require("path");
const express = require("express");
const routes = require("./routes");
const PORT = process.env.PORT || 3000;
const app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

// serve static assets (css, images, etc.) from project root
app.use(express.static(path.resolve(__dirname)));

// Use the router
app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
