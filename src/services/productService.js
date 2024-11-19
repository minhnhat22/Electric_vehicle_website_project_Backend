const Product = require('../models/productModel'); // Import model sản phẩm

const ProductService = {
  // Lấy tất cả sản phẩm với phân trang và có thể lọc theo parent_type_id
  getAllProducts: async (limit, offset, parent_type_id = null) => {
    return await Product.getAll(limit, offset, parent_type_id); // Gọi phương thức trong model để lấy sản phẩm
  },

  // Lấy sản phẩm theo ID
  getProductById: async (id) => {
    return await Product.getById(id); // Gọi phương thức trong model để lấy sản phẩm theo ID
  },

  // Lấy tất cả sản phẩm kèm theo name_special_group từ bảng special_product_groups
  getProductsWithSpecialGroup: async (limit, offset, parent_type_id = null) => {
    try {
      return await Product.getAll(limit, offset, parent_type_id); // Lấy sản phẩm và name_special_group
    } catch (error) {
      console.error("Error fetching products with special group:", error);
      throw error; // Nếu có lỗi, ném ra để controller có thể xử lý
    }
  },

  // Tạo mới sản phẩm
  createProduct: async (product_name, product_image, product_price, discount_percentage, product_quantity, parent_type_id, child_type_id, id_special) => {
    return await Product.create(product_name, product_image, product_price, discount_percentage, product_quantity, parent_type_id, child_type_id, id_special); // Gọi phương thức trong model để tạo sản phẩm
  },

  // Cập nhật sản phẩm
  updateProduct: async (id, product_name, product_image, product_price, discount_percentage, product_quantity, parent_type_id, child_type_id, id_special) => {
    await Product.update(id, product_name, product_image, product_price, discount_percentage, product_quantity, parent_type_id, child_type_id, id_special); // Gọi phương thức trong model để cập nhật sản phẩm
  },

  // Xóa sản phẩm
  deleteProduct: async (id) => {
    await Product.delete(id); // Gọi phương thức trong model để xóa sản phẩm
  }
};

module.exports = ProductService;
