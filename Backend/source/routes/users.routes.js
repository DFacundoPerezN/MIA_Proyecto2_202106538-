const { Router } = require('express'); //npm install express
const { check } = require('express-validator'); //npm install express-validator

const usersController = require('../controllers/user.controller');

const router = Router();

router.get('/', (req, res) => {
    res.status(200).json({ 
        message: 'Hello User' 
    });
});

module.exports = router;