// src/models/Criteria.js
const db = require('../config/database'); // Kết nối cơ sở dữ liệu

const Criteria = {
  // Lấy tất cả tiêu chí
  getAll: async () => {
    const [rows] = await db.query('SELECT * FROM store_criteria');
    return rows;
  },

   // Lấy tiêu chí theo group_id
   getByGroupId: async (groupId) => {
    const [rows] = await db.query('SELECT * FROM store_criteria WHERE group_id = ?', [groupId]);
    return rows;
  },

  // Lấy tiêu chí theo ID
  getById: async (id) => {
    const [rows] = await db.query('SELECT * FROM store_criteria WHERE criteria_id = ?', [id]);
    return rows[0];
  },

  // Tạo tiêu chí mới
  create: async (title, content, imagePath, groupId) => {
    const [result] = await db.query(
      'INSERT INTO store_criteria (title, content, image_path, group_id) VALUES (?, ?, ?, ?)',
      [title, content, imagePath, groupId]
    );
    return result.insertId;
  },

  // Cập nhật tiêu chí
  update: async (id, title, content, imagePath, groupId) => {
    await db.query(
      'UPDATE store_criteria SET title = ?, content = ?, image_path = ?, group_id = ? WHERE criteria_id = ?',
      [title, content, imagePath, groupId, id]
    );
  },

  // Xóa tiêu chí
  delete: async (id) => {
    await db.query('DELETE FROM store_criteria WHERE criteria_id = ?', [id]);
  }
};

module.exports = Criteria;
