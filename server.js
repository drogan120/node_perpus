const express = require("express");

const app = express();

// Config
const config = require("./config/config");

app.listen(config.port, () => {
  console.log("Server is running on http://127.0.0.1:" + config.port);
});
