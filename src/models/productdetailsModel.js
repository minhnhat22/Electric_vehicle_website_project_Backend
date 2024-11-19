const db = require("../config/database");

// Bảng sản phẩm
const Product = {
  getById: async (productId) => {
    const query = `
      SELECT * FROM products WHERE product_id = ?
    `;
    const [rows] = await db.query(query, [productId]);
    return rows.length ? rows[0] : null;
  },
};

// Bảng hình ảnh và màu sắc
const ProductImageColor = {
  getByProductId: async (productId) => {
    const query = `
      SELECT * FROM product_images_and_colors WHERE product_id = ?
    `;
    const [rows] = await db.query(query, [productId]);
    return rows;
  },
};

// Bảng kích thước và trọng lượng
const ProductDimensionWeight = {
  getByProductId: async (productId) => {
    const query = `
      SELECT * FROM product_dimensions_and_weight WHERE product_id = ?
    `;
    const [rows] = await db.query(query, [productId]);
    return rows.length ? rows[0] : null;
  },
};

// Bảng động cơ
const ProductEngine = {
  getByProductId: async (productId) => {
    const query = `
      SELECT * FROM product_engines WHERE product_id = ?
    `;
    const [rows] = await db.query(query, [productId]);
    return rows.length ? rows[0] : null;
  },
};

// Bảng ắc quy
const ProductBattery = {
  getByProductId: async (productId) => {
    const query = `
      SELECT * FROM product_batteries WHERE product_id = ?
    `;
    const [rows] = await db.query(query, [productId]);
    return rows.length ? rows[0] : null;
  },
};

// Bảng thông số khác
const ProductOtherSpec = {
  getByProductId: async (productId) => {
    const query = `
      SELECT * FROM product_other_specs WHERE product_id = ?
    `;
    const [rows] = await db.query(query, [productId]);
    return rows.length ? rows[0] : null;
  },
};

// Bảng bài viết đánh giá
const ReviewArticle = {
  getByProductId: async (productId) => {
    const query = `
      SELECT * FROM review_articles WHERE product_id = ?
    `;
    const [rows] = await db.query(query, [productId]);
    return rows;
  },
};

module.exports = {
  Product,
  ProductImageColor,
  ProductDimensionWeight,
  ProductEngine,
  ProductBattery,
  ProductOtherSpec,
  ReviewArticle,
};
