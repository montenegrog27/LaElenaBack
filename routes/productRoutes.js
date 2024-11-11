const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

// Ruta para obtener productos
router.get("/", productController.getProducts);

module.exports = router;
