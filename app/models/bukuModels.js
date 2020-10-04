const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let bukuSchema = new Schema({
  judul: {
    type: String,
    required: true,
  },
  pengarang: {
    type: String,
    required: true,
  },
  penerbit: {
    type: String,
    required: true,
  },
  isbn: {
    type: String,
    required: true,
  },
  nomor_cetak: {
    type: String,
    required: true,
  },
  jumlah_halaman: {
    type: String,
    required: true,
  },
  tahun_terbit: {
    type: String,
    required: true,
  },
  sinopsis: {
    type: String,
    required: true,
  },
  cover: {
    type: String,
    required: false,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

let Buku = mongoose.model("buku", bukuSchema);

module.exports = Buku;
