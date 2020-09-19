const express = require("express");
const path = require("path");
const exhpbs = require("express-handlebars");
const app = express();

// Config
const config = require("./config/config");

// Route
const dashboard = require("./app/routes/dashboard");
const buku = require("./app/routes/buku");

// Setting Handlebars
app.engine(".hbs", exhpbs({ defaultLayout: "main", extname: ".hbs" }));
app.set("view engine", ".hbs");

// Seting public folder
app.use(express.static(path.join(__dirname, "public")));

app.use("/dashboard", dashboard);
app.use("/buku", buku);

app.listen(config.port, () => {
  console.log("Server is running on http://127.0.0.1:" + config.port);
});
