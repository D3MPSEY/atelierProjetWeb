const Article = require('../models/article');

const create = (req, res) => {
    const article = new Article({ title: req.body.title, author: req.body.author, text: req.body.text, date: req.body.date })
    article.save()
        .then(() => {
            res.sendStatus(204);
        })
        .catch(() => {
            res.sendStatus(500);
        })
}

const modify = async (req, res) => {
    const article = await Article.findOneAndUpdate({ id: req.body.id }, { title: req.body.title, text: req.body.text, date: time.now() });
    article.save()
        .then(() => {
            res.sendStatus(204);
        })
        .catch(() => {
            res.sendStatus(500);
        })
}

const readAll = async (req, res) => {
    const articles = await Article.find({})
    res.send(article)
}

module.exports = {
    create,
    modify,
    readAll
}