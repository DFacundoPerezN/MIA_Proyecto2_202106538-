const { Router } = require('express'); //npm install express
const { check } = require('express-validator'); //npm install express-validator
const validateAttributes = require('../middlewares/validateAttributes');
//const adminController = require('../controllers/admin.controller');

const adminController = require('../controllers/admin.controller');

const router = Router();

router.get('/', (req, res) => {
    res.status(200).json({ 
        message: 'Hello Admin' 
    });
});

router.get('/ciclo_for/:number', adminController.ciclio_for);  

//Ruta para registrar un usuario
router.post('/register',[
    check('name', 'Name is required').not().isEmpty(),
    check('user', 'Username is required').not().isEmpty(),
    check('lastname', 'Lastname is required').not().isEmpty(),
    check('email', 'Email is required').isEmail(),
    check('password', 'Password is required').isLength({ min: 5 }),
    validateAttributes
], adminController.register);

module.exports = router;