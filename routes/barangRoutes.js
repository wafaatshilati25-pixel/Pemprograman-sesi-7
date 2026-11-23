// Routes: mendefinisikan endpoint REST API
const express = require("express");
const router = express.Router();
const c = require("../controllers/barangController");

router.get("/", c.getAllBarang);
router.get("/:id", c.getBarangById);
router.post("/", c.createBarang);
router.put("/:id", c.updateBarang);
router.delete("/:id", c.deleteBarang);

module.exports = router;
