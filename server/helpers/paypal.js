const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox", // Use "live" for production
  client_id: "AayQIPHgUn3Hd7IVfZlRIxktKh1LBuKFFIUEpIsNhDvwVNz2f2c_ImsqRDcSP3Ufv6PyDZOGmMbs-A95",  // Replace with your PayPal Client ID
  client_secret: "EAOEG2SO61yjJh5HIzcH9iYveBjINu8QbQ_to59E3Ekhfz0wuLOYYolU-sBGMsBOZDUzUTIQ10Rf97PA",  // Replace with your PayPal Client Secret
});

module.exports = paypal;

