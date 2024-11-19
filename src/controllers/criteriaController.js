// src/controllers/criteriaController.js
const CriteriaService = require('../services/CriteriaService');

// Lấy tiêu chí theo group_id
exports.getCriteriaByGroupId = async (req, res) => {
  try {
    const groupId = req.params.groupId;
    const criteria = await CriteriaService.getCriteriaByGroupId(groupId);
    res.json(criteria);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Lỗi khi lấy dữ liệu tiêu chí theo group_id' });
  }
};

// Lấy tất cả tiêu chí
exports.getAllCriteria = async (req, res) => {
  try {
    const criteria = await CriteriaService.getAllCriteria();
    res.json(criteria);
  } catch (error) {
    res.status(500).json({ message: 'Lỗi khi lấy dữ liệu tiêu chí' });
  }
};

// Lấy tiêu chí theo ID
exports.getCriteriaById = async (req, res) => {
  try {
    const id = req.params.id;
    const criteria = await CriteriaService.getCriteriaById(id);
    if (criteria) {
      res.json(criteria);
    } else {
      res.status(404).json({ message: 'Không tìm thấy tiêu chí' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Lỗi khi lấy dữ liệu tiêu chí' });
  }
};

// Tạo mới tiêu chí
exports.createCriteria = async (req, res) => {
  try {
    const { title, content, image_path, group_id } = req.body;
    const newId = await CriteriaService.createCriteria(title, content, image_path, group_id);
    res.status(201).json({ success: true, message: 'Tiêu chí đã được tạo thành công', id: newId });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Có lỗi xảy ra khi tạo tiêu chí' });
  }
};

// Cập nhật tiêu chí
exports.updateCriteria = async (req, res) => {
  try {
    const id = req.params.id;
    const { title, content, image_path, group_id } = req.body;
    await CriteriaService.updateCriteria(id, title, content, image_path, group_id);
    res.json({ success: true, message: 'Tiêu chí đã được cập nhật' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Có lỗi xảy ra khi cập nhật tiêu chí' });
  }
};

// Xóa tiêu chí
exports.deleteCriteria = async (req, res) => {
  try {
    const id = req.params.id;
    await CriteriaService.deleteCriteria(id);
    res.json({ success: true, message: 'Tiêu chí đã được xóa' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Có lỗi xảy ra khi xóa tiêu chí' });
  }
};
