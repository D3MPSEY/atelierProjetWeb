const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    title: String, 
    message: String,
    publicationDate: Date,
})

const Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;