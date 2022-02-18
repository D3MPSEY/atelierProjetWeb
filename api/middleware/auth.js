const Joi = require('joi');

const loginIsValid = (req, res, next) => {
    const schema = Joi.object({
        username: Joi.string().trim().min(1).messages({'*': 'Le nom d\'utilisateur est requis'}),
        password: Joi.string().trim().min(1).messages({'*': 'Le mot de passes est requis'})
    });
    const result = schema.validate(req.body, next);
    if (result.error){
        res.status(400).send(result.error.details[0].message).end();
    } else {
        next();
    }
}

module.exports = {
    loginIsValid
};