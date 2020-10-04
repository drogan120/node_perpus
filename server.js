const express = require("express");
const path = require("path");
const exhpbs = require("express-handlebars");
const app = express();
// Config
const config = require("./config/config");
config.connectDB();

// Route
const dashboard = require("./app/routes/dashboard");
const buku = require("./app/routes/buku");
const users = require("./app/routes/users");

// Setting Handlebars
app.engine(".hbs", exhpbs({ defaultLayout: "main", extname: ".hbs" }));
app.set("view engine", ".hbs");

// Body Parser
app.use(express.urlencoded({ extended: false }));

// Seting public folder
app.use(express.static(path.join(__dirname, "public")));

app.use("/", dashboard);
app.use("/buku", buku);
app.use("/users", users);

app.listen(config.port, () => {
  console.log("Server is running on http://127.0.0.1:" + config.port);
});
