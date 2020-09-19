const express = require("express");
const { route } = require("./dashboard");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("buku/index");
});

router.get("/new", (req, res) => {
  res.send({ messages: "new book was here" });
});

module.exports = router;
