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

router.post("/new", (req, res) => {
  let buku = new Buku();
  buku.judul = req.body.judul;
  buku.pengarang = req.body.pengarang;
  buku.penerbit = req.body.penerbit;
  buku.isbn = req.body.isbn;
  buku.nomor_cetak = req.body.nomor_cetak;
  buku.jumlah_halaman = req.body.jumlah_halaman;
  buku.tahun_terbit = req.body.tahun_terbit;
  buku.sinopsis = req.body.sinopsis;
  buku.cover = req.body.cover;

  console.log(buku);

  buku.save((err) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/buku");
    }
  });
});
module.exports = router;
