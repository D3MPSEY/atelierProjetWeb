const Joi = require('joi');

const articleIsValid = (req, res, next) => {
    const schema = Joi.object({
        title: Joi.string().trim().min(1).messages({'*': 'Le titre est requis.'}),
        message: Joi.string().trim().min(1).messages({'*': 'Le message est requis.'}),
        date: Joi.date().format('YYYY-MM-DD'),
    });

    const result = schema.validate(req.body, next);
    if (result.error){
        res.status(400).send(result.error,details[0].message).end();
    } else {
        next();
    }
}

module.exports = {
    articleIsValid
}