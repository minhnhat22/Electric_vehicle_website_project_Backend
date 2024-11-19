const db = require('../config/database'); // Kết nối cơ sở dữ liệu của bạn

const Product = {
  // Lấy tất cả sản phẩm với phân trang, và có thể lọc theo parent_type_id
  getAll: async (limit, offset, parent_type_id = null) => {
    let query = `
      SELECT p.*, s.name_special_group
      FROM products p
      LEFT JOIN special_product_groups s ON p.id_special = s.id_special
      ORDER BY p.created_at DESC
      LIMIT ? OFFSET ?
    `;
    let params = [limit, offset];

    // Nếu có parent_type_id, thêm vào query để lọc theo parent_type_id
    if (parent_type_id) {
      query = `
        SELECT p.*, s.name_special_group
        FROM products p
        LEFT JOIN special_product_groups s ON p.id_special = s.id_special
        WHERE p.parent_type_id = ?
        ORDER BY p.created_at DESC
        LIMIT ? OFFSET ?
      `;
      params = [parent_type_id, limit, offset];
    }

    const [rows] = await db.query(query, params);
    return rows; // Trả về danh sách sản phẩm kèm theo name_special_group
  },

  // Đếm tổng số sản phẩm để phục vụ phân trang
  countAll: async (parent_type_id = null) => {
    let query = 'SELECT COUNT(*) as total FROM products';
    let params = [];

    // Nếu có parent_type_id, thêm vào query để đếm theo parent_type_id
    if (parent_type_id) {
      query = 'SELECT COUNT(*) as total FROM products WHERE parent_type_id = ?';
      params = [parent_type_id];
    }

    const [rows] = await db.query(query, params);
    return rows[0].total; // Trả về tổng số sản phẩm
  },

  // Lấy sản phẩm theo ID
  getById: async (id) => {
    const [rows] = await db.query('SELECT p.*, s.name_special_group FROM products p LEFT JOIN special_product_groups s ON p.id_special = s.id_special WHERE p.product_id = ?', [id]);
    return rows[0]; // Trả về thông tin chi tiết sản phẩm kèm theo name_special_group
  },

  // Thêm sản phẩm mới
  create: async (product_name, product_image, product_price, discount_percentage, product_quantity, parent_type_id, child_type_id, id_special) => {
    const [result] = await db.query(
      'INSERT INTO products (product_name, product_image, product_price, discount_percentage, product_quantity, parent_type_id, child_type_id, id_special, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, NOW())',
      [product_name, product_image, product_price, discount_percentage, product_quantity, parent_type_id, child_type_id, id_special]
    );
    return result.insertId; // Trả về ID của sản phẩm mới được tạo
  },

  // Cập nhật sản phẩm
  update: async (id, product_name, product_image, product_price, discount_percentage, product_quantity, parent_type_id, child_type_id, id_special) => {
    const [result] = await db.query(
      'UPDATE products SET product_name = ?, product_image = ?, product_price = ?, discount_percentage = ?, product_quantity = ?, parent_type_id = ?, child_type_id = ?, id_special = ?, updated_at = NOW() WHERE product_id = ?',
      [product_name, product_image, product_price, discount_percentage, product_quantity, parent_type_id, child_type_id, id_special, id]
    );
    return result.affectedRows; // Trả về số lượng dòng bị ảnh hưởng (sản phẩm được cập nhật)
  },

  // Xóa sản phẩm
  delete: async (id) => {
    const [result] = await db.query('DELETE FROM products WHERE product_id = ?', [id]);
    return result.affectedRows; // Trả về số lượng dòng bị ảnh hưởng (sản phẩm bị xóa)
  }
};

module.exports = Product;
