const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("dashboard/main");
});

router.get("/dashboard", (req, res) => {
  res.render("dashboard/index");
});

router.get("/login", (req, res) => {
  res.render("auth/login");
});

router.get("/register", (req, res) => {
  res.render("auth/register");
});

module.exports = router;
