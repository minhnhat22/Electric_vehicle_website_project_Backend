const db = require('../config/database'); // Kết nối cơ sở dữ liệu của bạn

const News = {
    // Lấy tất cả tin tức với phân trang
    getAll: async (limit, offset) => {
        const [rows] = await db.query(
            'SELECT * FROM news ORDER BY created_at DESC LIMIT ? OFFSET ?',
            [limit, offset]
        );
        return rows;
    },

    // Đếm tổng số tin tức để phục vụ cho phân trang
    countAll: async () => {
        const [rows] = await db.query('SELECT COUNT(*) as total FROM news');
        return rows[0].total;
    },

    // Lấy tin tức theo ID
    getById: async (id) => {
        const [rows] = await db.query('SELECT * FROM news WHERE news_id = ?', [id]);
        return rows[0];
    },

    // Thêm tin tức mới
    create: async (title, content, image, groupId) => {
        const [result] = await db.query(
            'INSERT INTO news (news_title, news_content, news_image, news_group_id, created_at) VALUES (?, ?, ?, ?, NOW())',
            [title, content, image, groupId]
        );
        return result.insertId;
    },

    // Cập nhật tin tức
    update: async (id, title, content, image, groupId) => {
        const [result] = await db.query(
            'UPDATE news SET news_title = ?, news_content = ?, news_image = ?, news_group_id = ?, updated_at = NOW() WHERE news_id = ?',
            [title, content, image, groupId, id]
        );
        return result.affectedRows;
    },

    // Xóa tin tức
    delete: async (id) => {
        const [result] = await db.query('DELETE FROM news WHERE news_id = ?', [id]);
        return result.affectedRows;
    }
};

module.exports = News;
