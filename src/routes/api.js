// src/routes/api.js
const express = require('express');
const router = express.Router();
const criteriaController = require('../controllers/criteriaController');
const newsController = require('../controllers/newsController');
const productController = require('../controllers/productController');
const ProductDetailsController = require('../controllers/productdetailsController');

// Các route cho tiêu chí
router.get('/criteria', criteriaController.getAllCriteria); // Lấy tất cả tiêu chí
router.get('/criteria/:id', criteriaController.getCriteriaById); // Lấy tiêu chí theo ID
router.post('/criteria', criteriaController.createCriteria); // Tạo mới tiêu chí
router.put('/criteria/:id', criteriaController.updateCriteria); // Cập nhật tiêu chí
router.delete('/criteria/:id', criteriaController.deleteCriteria); // Xóa tiêu chí
router.get('/criteria/group/:groupId', criteriaController.getCriteriaByGroupId); // Tiêu chí theo group_id

// Các route cho tin tức
router.get('/news', newsController.getAllNews); // Lấy tất cả tin tức
router.get('/news/:id', newsController.getNewsById); // Lấy tin tức theo ID
router.post('/news', newsController.createNews); // Tạo mới tin tức
router.put('/news/:id', newsController.updateNews); // Cập nhật tin tức
router.delete('/news/:id', newsController.deleteNews); // Xóa tin tức

// API Route: Lấy tất cả sản phẩm với phân trang và có thể lọc theo parent_type_id
router.get('/products', productController.getAllProducts);

// Các route khác cho sản phẩm
router.get('/products/:id', productController.getProductById); // Lấy sản phẩm theo ID
router.post('/products', productController.createProduct); // Tạo mới sản phẩm
router.put('/products/:id', productController.updateProduct); // Cập nhật sản phẩm
router.delete('/products/:id', productController.deleteProduct); // Xóa sản phẩm

// Route để lấy thông tin chi tiết sản phẩm theo productId
router.get('/productdetails/:productId', ProductDetailsController.getProductDetails);

module.exports = router;
