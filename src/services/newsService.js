const News = require('../models/News');

const getAllNews = async (page, limit) => {
    const offset = (page - 1) * limit;
    const newsList = await News.getAll(limit, offset);
    const totalNews = await News.countAll();
    return {
        newsList,
        totalPages: Math.ceil(totalNews / limit),
        currentPage: page
    };
};

const getNewsById = async (id) => {
    return await News.getById(id);
};

const createNews = async (title, content, image, groupId) => {
    return await News.create(title, content, image, groupId);
};

const updateNews = async (id, title, content, image, groupId) => {
    return await News.update(id, title, content, image, groupId);
};

const deleteNews = async (id) => {
    return await News.delete(id);
};

module.exports = {
    getAllNews,
    getNewsById,
    createNews,
    updateNews,
    deleteNews
};
