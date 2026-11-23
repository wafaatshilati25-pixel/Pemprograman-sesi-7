# Project PBF Sesi 7 – REST API Sistem Inventaris Barang

REST API sederhana menggunakan Node.js dan Express.js. Data disimpan di array (tanpa database).

## Menjalankan
```
npm install
npm start
```
Server berjalan di `http://localhost:3000`

## Struktur
```
project-pbf/
├── models/barangModel.js
├── controllers/barangController.js
├── routes/barangRoutes.js
├── app.js
└── package.json
```

## Dokumentasi Endpoint

| Method | Endpoint | Fungsi | Status |
|--------|----------|--------|--------|
| GET | /api/barang | Menampilkan semua barang | 200 |
| GET | /api/barang/:id | Menampilkan detail barang | 200 / 404 |
| POST | /api/barang | Menambahkan barang | 201 / 400 |
| PUT | /api/barang/:id | Mengubah barang | 200 / 404 |
| DELETE | /api/barang/:id | Menghapus barang | 200 / 404 |

### Request Body (POST / PUT)
```json
{
  "kode": "BRG-004",
  "nama": "Printer Canon",
  "kategori": "Elektronik",
  "jumlah": 5,
  "kondisi": "Baik"
}
```

###  Response (POST)
```json
{
  "success": true,
  "message": "Data berhasil ditambahkan",
  "data": {
    "id": 4,
    "kode": "BRG-004",
    "nama": "Printer Canon",
    "kategori": "Elektronik",
    "jumlah": 5,
    "kondisi": "Baik"
  }
}
```

###  Response (Data Tidak Ditemukan – 404)
```json
{
  "success": false,
  "message": "Barang dengan ID 99 tidak ditemukan"
}
```
