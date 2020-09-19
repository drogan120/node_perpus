const express = require("express");
const { route } = require("./dashboard");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("layouts/main");
});

router.get("/new", (req, res) => {
  res.send({ messages: "new book was here" });
});

module.exports = router;
