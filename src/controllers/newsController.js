const newsService = require('../services/newsService');

const getAllNews = async (req, res) => {
    const { page = 1, limit = 12 } = req.query;
    try {
        const data = await newsService.getAllNews(parseInt(page), parseInt(limit));
        return res.json(data);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const getNewsById = async (req, res) => {
    try {
        const news = await newsService.getNewsById(req.params.id);
        if (!news) {
            return res.status(404).json({ error: 'News not found' });
        }
        return res.json(news);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const createNews = async (req, res) => {
    const { title, content, image, groupId } = req.body;
    try {
        const newNewsId = await newsService.createNews(title, content, image, groupId);
        return res.status(201).json({ newsId: newNewsId });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const updateNews = async (req, res) => {
    const { title, content, image, groupId } = req.body;
    try {
        const rowsAffected = await newsService.updateNews(req.params.id, title, content, image, groupId);
        if (rowsAffected === 0) {
            return res.status(404).json({ error: 'News not found' });
        }
        return res.status(200).json({ message: 'News updated successfully' });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const deleteNews = async (req, res) => {
    try {
        const rowsAffected = await newsService.deleteNews(req.params.id);
        if (rowsAffected === 0) {
            return res.status(404).json({ error: 'News not found' });
        }
        return res.status(200).json({ message: 'News deleted successfully' });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllNews,
    getNewsById,
    createNews,
    updateNews,
    deleteNews
};
