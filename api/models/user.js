const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    usrname: String,
    password: String,
    role: Number,
    verified: Boolean,
    friendId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    //fait une sous collection a la table user
    businessId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Business'
    },
    business: {
        name: String,
        address: String
    }
})

const User = mongoose.model('User', userSchema);


module.exports = User;