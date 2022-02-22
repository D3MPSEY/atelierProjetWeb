const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    title: String,
    author: String,
    text: String,
    date: Date,
})

const Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;