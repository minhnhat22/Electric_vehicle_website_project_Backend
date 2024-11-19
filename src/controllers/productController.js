// src/controllers/productController.js
const ProductService = require('../services/productService');

// Lấy tất cả sản phẩm với phân trang và có thể lọc theo parent_type_id
const getAllProducts = async (req, res) => {
  try {
    // Lấy các tham số từ query string (limit, offset, parent_type_id)
    const { limit = 4, offset = 0, parent_type_id } = req.query;

    // Chuyển các tham số limit và offset sang kiểu số
    const pageLimit = parseInt(limit, 10);
    const pageOffset = parseInt(offset, 10);

    // Kiểm tra các tham số limit và offset có phải là số hợp lệ không
    if (isNaN(pageLimit) || isNaN(pageOffset)) {
      return res.status(400).json({ message: 'Limit và offset phải là các giá trị hợp lệ.' });
    }

    // Gọi service để lấy danh sách sản phẩm với phân trang và lọc theo parent_type_id nếu có
    const products = await ProductService.getAllProducts(pageLimit, pageOffset, parent_type_id);

    // Nếu không có sản phẩm nào, trả về 404
    if (products.length === 0) {
      return res.status(404).json({ message: 'Không có sản phẩm nào phù hợp với yêu cầu.' });
    }

    // Trả về danh sách sản phẩm
    res.json(products);
  } catch (error) {
    // In ra lỗi server để dễ dàng debug
    console.error('Error in getAllProducts:', error);

    // Trả về lỗi 500 nếu có vấn đề trong quá trình xử lý
    res.status(500).json({ message: 'Lỗi khi lấy danh sách sản phẩm' });
  }
};

// Lấy sản phẩm theo ID
const getProductById = async (req, res) => {
  try {
    // Lấy id sản phẩm từ params của route
    const id = req.params.id;

    // Kiểm tra id có phải là số hợp lệ không
    if (isNaN(id)) {
      return res.status(400).json({ message: 'ID sản phẩm phải là số hợp lệ.' });
    }

    // Gọi service để lấy thông tin sản phẩm theo ID
    const product = await ProductService.getProductById(id);

    // Nếu sản phẩm không tìm thấy, trả về lỗi 404
    if (!product) {
      return res.status(404).json({ message: 'Không tìm thấy sản phẩm' });
    }

    // Trả về thông tin sản phẩm
    res.json(product);
  } catch (error) {
    console.error('Error in getProductById:', error);
    res.status(500).json({ message: 'Lỗi khi lấy thông tin sản phẩm' });
  }
};

// Tạo mới sản phẩm
const createProduct = async (req, res) => {
  try {
    const { product_name, product_image, product_price, discount_percentage, product_quantity, parent_type_id, child_type_id, id_special } = req.body;

    // Kiểm tra các tham số bắt buộc
    if (!product_name || !product_image || !product_price || !discount_percentage || !product_quantity || !parent_type_id || !child_type_id) {
      return res.status(400).json({ message: 'Thiếu thông tin bắt buộc để tạo sản phẩm' });
    }

    // Kiểm tra dữ liệu đầu vào hợp lệ
    if (isNaN(product_price) || isNaN(discount_percentage) || isNaN(product_quantity) || isNaN(parent_type_id) || isNaN(child_type_id)) {
      return res.status(400).json({ message: 'Các tham số giá trị phải là số hợp lệ.' });
    }

    // Gọi service để tạo sản phẩm mới
    const newProductId = await ProductService.createProduct(product_name, product_image, product_price, discount_percentage, product_quantity, parent_type_id, child_type_id, id_special);

    // Trả về kết quả thành công
    res.status(201).json({ success: true, message: 'Sản phẩm đã được tạo thành công', id: newProductId });
  } catch (error) {
    console.error('Error in createProduct:', error);
    res.status(500).json({ success: false, message: 'Có lỗi xảy ra khi tạo sản phẩm' });
  }
};

// Cập nhật sản phẩm
const updateProduct = async (req, res) => {
  try {
    const id = req.params.id;

    // Kiểm tra id có phải là số hợp lệ không
    if (isNaN(id)) {
      return res.status(400).json({ message: 'ID sản phẩm phải là số hợp lệ.' });
    }

    const { product_name, product_image, product_price, discount_percentage, product_quantity, parent_type_id, child_type_id, id_special } = req.body;

    // Kiểm tra các tham số bắt buộc
    if (!product_name || !product_image || !product_price || !discount_percentage || !product_quantity || !parent_type_id || !child_type_id) {
      return res.status(400).json({ message: 'Thiếu thông tin bắt buộc để cập nhật sản phẩm' });
    }

    // Kiểm tra dữ liệu đầu vào hợp lệ
    if (isNaN(product_price) || isNaN(discount_percentage) || isNaN(product_quantity) || isNaN(parent_type_id) || isNaN(child_type_id)) {
      return res.status(400).json({ message: 'Các tham số giá trị phải là số hợp lệ.' });
    }

    // Gọi service để cập nhật sản phẩm
    const result = await ProductService.updateProduct(id, product_name, product_image, product_price, discount_percentage, product_quantity, parent_type_id, child_type_id, id_special);

    // Nếu không có bản ghi nào được cập nhật
    if (result === 0) {
      return res.status(404).json({ message: 'Không tìm thấy sản phẩm để cập nhật' });
    }

    res.json({ success: true, message: 'Sản phẩm đã được cập nhật' });
  } catch (error) {
    console.error('Error in updateProduct:', error);
    res.status(500).json({ success: false, message: 'Có lỗi xảy ra khi cập nhật sản phẩm' });
  }
};

// Xóa sản phẩm
const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;

    if (isNaN(id)) {
      return res.status(400).json({ message: 'ID sản phẩm phải là số hợp lệ.' });
    }

    const result = await ProductService.deleteProduct(id);

    if (result === 0) {
      return res.status(404).json({ message: 'Không tìm thấy sản phẩm để xóa' });
    }

    res.json({ success: true, message: 'Sản phẩm đã được xóa' });
  } catch (error) {
    console.error('Error in deleteProduct:', error);
    res.status(500).json({ success: false, message: 'Có lỗi xảy ra khi xóa sản phẩm' });
  }
};

// Export tất cả các hàm điều khiển để sử dụng ở nơi khác (ví dụ: trong router)
module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
};
