const {
  Product,
  ProductImageColor,
  ProductDimensionWeight,
  ProductEngine,
  ProductBattery,
  ProductOtherSpec,
  ReviewArticle,
} = require("../models/productdetailsModel");

const getProductDetails = async (productId) => {
  try {
    // Lấy thông tin từng bảng theo productId
    const product = await Product.getById(productId);
    if (!product) return null;

    const imagesAndColors = await ProductImageColor.getByProductId(productId);
    const dimensionsAndWeight = await ProductDimensionWeight.getByProductId(productId);
    const engine = await ProductEngine.getByProductId(productId);
    const battery = await ProductBattery.getByProductId(productId);
    const otherSpecs = await ProductOtherSpec.getByProductId(productId);
    const reviewArticles = await ReviewArticle.getByProductId(productId);

    return {
      product,
      imagesAndColors,
      dimensionsAndWeight,
      engine,
      battery,
      otherSpecs,
      reviewArticles,
    };
  } catch (error) {
    throw new Error("Error retrieving product details: " + error.message);
  }
};

module.exports = { getProductDetails };
