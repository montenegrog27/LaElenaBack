const wooCommerceAPI = require("../config/wooCommerce");

// Obtener lista de productos
exports.getProducts = async (req, res) => {
  try {
    const response = await wooCommerceAPI.get("/products");
    res.json(response.data);
  } catch (error) {
    console.error("Error al obtener productos:", error);
    res.status(500).json({ message: "Error al obtener productos" });
  }
};
