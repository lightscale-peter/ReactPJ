const router = require('express').Router();
const controller = require('./auth.controller');
const authMiddleware = require('../../../middlewares/auth');

router.post('/register', controller.register);
router.post('/login', controller.login);

//module.exports는 use로 받고
router.use('/check', authMiddleware);
//exports.check는 restfulAPI로 받는다
router.get('/check', controller.check);

module.exports = router;
