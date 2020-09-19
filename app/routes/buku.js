const express = require("express");
const router = express.Router();

const Buku = require("../models/bukuModels");

router.get("/", (req, res) => {
  Buku.find({}, (err, data) => {
    if (err) {
      res.send({ error: err });
    } else {
      res.render("buku/index", { buku: data });
      console.log(data);
    }
  });
});

router.get("/new", (req, res) => {
  res.render("buku/new");
});

module.exports = router;
