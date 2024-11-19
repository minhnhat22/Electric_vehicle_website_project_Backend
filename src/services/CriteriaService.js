// src/services/CriteriaService.js
const Criteria = require('../models/Criteria');

const CriteriaService = {
  // Lấy tất cả tiêu chí
  getAllCriteria: async () => {
    return await Criteria.getAll();
  },


  // Lấy tiêu chí theo group_id
  getCriteriaByGroupId: async (groupId) => {
    return await Criteria.getByGroupId(groupId);
  },


  // Lấy tiêu chí theo ID
  getCriteriaById: async (id) => {
    return await Criteria.getById(id);
  },

  // Tạo mới tiêu chí
  createCriteria: async (title, content, imagePath, groupId) => {
    return await Criteria.create(title, content, imagePath, groupId);
  },

  // Cập nhật tiêu chí
  updateCriteria: async (id, title, content, imagePath, groupId) => {
    await Criteria.update(id, title, content, imagePath, groupId);
  },

  // Xóa tiêu chí
  deleteCriteria: async (id) => {
    await Criteria.delete(id);
  }
};

module.exports = CriteriaService;
