const wooCommerceAPI = require("../config/wooCommerce");

// Crear una orden
exports.createOrder = async (req, res) => {
  try {
    const response = await wooCommerceAPI.post("/orders", req.body);
    res.json(response.data);
  } catch (error) {
    console.error("Error al crear la orden:", error);
    res.status(500).json({ message: "Error al crear la orden" });
  }
};
