const User = require('../models/user');


const login = async (req, res) => {
    const user = await User.findOne({username: req.body.username, password: req.body.password}).exec()
    if (user) {
        res.sendStatus(204);
    } else {
        res.sendStatus(401);
    }
}
const fakeRegister = (req, res) => {
    const user = new User({username: 'admin', password: 'admin'});
    user.save()
        .then(() => {
            res.sendStatus(204);
        })
        .catch(() => {
            res.sendStatus(500);
        })

}
module.exports = {
    login,
    fakeRegister
}