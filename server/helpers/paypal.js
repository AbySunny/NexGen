const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox", // Use "live" for production
  client_id: "...",  // Replace with your PayPal Client ID
  client_secret: "...",  // Replace with your PayPal Client Secret
});

module.exports = paypal;

