const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

// Ruta para crear una orden
router.post("/", orderController.createOrder);

module.exports = router;
