const express = require("express");
const barangRoutes = require("./routes/barangRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ success: true, message: "API Sistem Inventaris Barang berjalan" });
});

app.use("/api/barang", barangRoutes);

// Handler untuk endpoint yang tidak ada
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Endpoint tidak ditemukan" });
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
