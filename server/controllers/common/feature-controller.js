// const Feature = require("../../models/Feature");

// const addFeatureImage = async (req, res) => {
//   try {
//     const { image } = req.body;

//     console.log(image, "image");

//     const featureImages = new Feature({
//       image,
//     });

//     await featureImages.save();

//     res.status(201).json({
//       success: true,
//       data: featureImages,
//     });
//   } catch (e) {
//     console.log(e);
//     res.status(500).json({
//       success: false,
//       message: "Some error occured!",
//     });
//   }
// };

// const getFeatureImages = async (req, res) => {
//   try {
//     const images = await Feature.find({});

//     res.status(200).json({
//       success: true,
//       data: images,
//     });
//   } catch (e) {
//     console.log(e);
//     res.status(500).json({
//       success: false,
//       message: "Some error occured!",
//     });
//   }
// };

// module.exports = { addFeatureImage, getFeatureImages };


const Feature = require("../../models/Feature");

// Add a new feature image
const addFeatureImage = async (req, res) => {
  try {
    const { image } = req.body;

    console.log(image, "image");

    // Create a new feature image document
    const featureImages = new Feature({
      image,
    });

    await featureImages.save();

    res.status(201).json({
      success: true,
      data: featureImages,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occurred!",
    });
  }
};

// Get all feature images
const getFeatureImages = async (req, res) => {
  try {
    // Fetch all feature images from the database
    const images = await Feature.find({});

    res.status(200).json({
      success: true,
      data: images,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occurred!",
    });
  }
};

// Delete a feature image by its ID
const deleteFeatureImage = async (req, res) => {
  try {
    const { imageId } = req.params; // Get image ID from the URL parameter

    // Attempt to delete the image by its ID
    const deletedImage = await Feature.findByIdAndDelete(imageId);

    if (!deletedImage) {
      return res.status(404).json({
        success: false,
        message: "Image not found!",
      });
    }

    // Successfully deleted image
    return res.status(200).json({
      success: true,
      message: "Image deleted successfully",
      id: imageId,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error deleting image",
    });
  }
};

module.exports = { addFeatureImage, getFeatureImages, deleteFeatureImage };
