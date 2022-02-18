const express = require('express');
const ctrlAuth = require('./controllers/auth');
const mdlAuth = require('./middleware/auth')



//router
const router = express.Router();
router
    .route('/login')
    .get(ctrlAuth.fakeRegister)
    .post(mdlAuth.loginIsValid, ctrlAuth.login);

router
    .route('/article')
    
// Même chose que sur la même ligne mais permet de faire des post des get etc sur la même route
module.exports = router;