// const express = require("express");

// const {
//   addFeatureImage,
//   getFeatureImages,
// } = require("../../controllers/common/feature-controller");

// const router = express.Router();

// router.post("/add", addFeatureImage);
// router.get("/get", getFeatureImages);

// module.exports = router;

const express = require("express");
const {
  addFeatureImage,
  getFeatureImages,
  deleteFeatureImage, // Import the new controller
} = require("../../controllers/common/feature-controller");

const router = express.Router();

router.post("/add", addFeatureImage);
router.get("/get", getFeatureImages);

// Add DELETE route for deleting an image
router.delete("/delete/:imageId", deleteFeatureImage); // DELETE route

module.exports = router;
