const axios = require("axios");
require("dotenv").config();

const wooCommerceAPI = axios.create({
  baseURL: process.env.WC_API_URL,
  auth: {
    username: process.env.WC_CONSUMER_KEY,
    password: process.env.WC_CONSUMER_SECRET,
  },
});

module.exports = wooCommerceAPI;
