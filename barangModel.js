// Model: mengelola data barang menggunakan array (penyimpanan sementara)
let barang = [
  { id: 1, kode: "BRG-001", nama: "Laptop Asus", kategori: "Elektronik", jumlah: 10, kondisi: "Baik" },
  { id: 2, kode: "BRG-002", nama: "Proyektor Epson", kategori: "Elektronik", jumlah: 3, kondisi: "Baik" },
  { id: 3, kode: "BRG-003", nama: "Kursi Kantor", kategori: "Furniture", jumlah: 25, kondisi: "Rusak Ringan" }
];

let nextId = 4;

const getAll = () => barang;

const getById = (id) => barang.find((b) => b.id === id);

const create = (data) => {
  const baru = {
    id: nextId++,
    kode: data.kode,
    nama: data.nama,
    kategori: data.kategori,
    jumlah: data.jumlah,
    kondisi: data.kondisi
  };
  barang.push(baru);
  return baru;
};

const update = (id, data) => {
  const index = barang.findIndex((b) => b.id === id);
  if (index === -1) return null;
  barang[index] = { ...barang[index], ...data, id };
  return barang[index];
};

const remove = (id) => {
  const index = barang.findIndex((b) => b.id === id);
  if (index === -1) return null;
  return barang.splice(index, 1)[0];
};

module.exports = { getAll, getById, create, update, remove };
