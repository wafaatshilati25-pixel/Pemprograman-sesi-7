// Controller: menangani request & response, memanggil fungsi pada model
const Barang = require("../models/barangModel");

const getAllBarang = (req, res) => {
  const data = Barang.getAll();
  res.status(200).json({
    success: true,
    message: "Data barang berhasil ditampilkan",
    total: data.length,
    data
  });
};

const getBarangById = (req, res) => {
  const id = parseInt(req.params.id);
  const data = Barang.getById(id);
  if (!data) {
    return res.status(404).json({
      success: false,
      message: `Barang dengan ID ${req.params.id} tidak ditemukan`
    });
  }
  res.status(200).json({
    success: true,
    message: "Detail barang berhasil ditampilkan",
    data
  });
};

const createBarang = (req, res) => {
  const { kode, nama, kategori, jumlah, kondisi } = req.body;
  if (!kode || !nama || !kategori || jumlah === undefined || !kondisi) {
    return res.status(400).json({
      success: false,
      message: "Data tidak lengkap. Wajib isi: kode, nama, kategori, jumlah, kondisi"
    });
  }
  const data = Barang.create({ kode, nama, kategori, jumlah, kondisi });
  res.status(201).json({
    success: true,
    message: "Data berhasil ditambahkan",
    data
  });
};

const updateBarang = (req, res) => {
  const id = parseInt(req.params.id);
  const data = Barang.update(id, req.body);
  if (!data) {
    return res.status(404).json({
      success: false,
      message: `Barang dengan ID ${req.params.id} tidak ditemukan`
    });
  }
  res.status(200).json({
    success: true,
    message: "Data berhasil diperbarui",
    data
  });
};

const deleteBarang = (req, res) => {
  const id = parseInt(req.params.id);
  const data = Barang.remove(id);
  if (!data) {
    return res.status(404).json({
      success: false,
      message: `Barang dengan ID ${req.params.id} tidak ditemukan`
    });
  }
  res.status(200).json({
    success: true,
    message: "Data berhasil dihapus",
    data
  });
};

module.exports = { getAllBarang, getBarangById, createBarang, updateBarang, deleteBarang };
