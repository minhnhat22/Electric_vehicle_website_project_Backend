const productdetailsService = require("../services/productdetailsService");

const getProductDetails = async (req, res) => {
  try {
    const { productId } = req.params;

    // Lấy thông tin chi tiết sản phẩm
    const productDetails = await productdetailsService.getProductDetails(productId);
    if (!productDetails) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: productDetails,
    });
  } catch (error) {
    console.error("Error in getProductDetails:", error.message);
    return res.status(500).json({
      success: false,
      message: "Failed to retrieve product details",
    });
  }
};

module.exports = { getProductDetails };
