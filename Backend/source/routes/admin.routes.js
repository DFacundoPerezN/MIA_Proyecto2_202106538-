const { Router } = require('express'); //npm install express
const { check } = require('express-validator'); //npm install express-validator
const validateAttributes = require('../middlewares/validateAttributes');

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
    check('rol', 'Rol is required').not().isEmpty(),
    check('email', 'Email is required').isEmail(),
    check('password', 'Password is required').isLength({ min: 5 }),
    validateAttributes
], adminController.register);

router.post('/registerFly',[
    check('name', 'Name is required').not().isEmpty(),
    check('origin', 'Origin is required').not().isEmpty(),
    check('destiny', 'Destiny is required').not().isEmpty(),
    check('days', 'Days is required').isNumeric(),
    check('price', 'Price is required').isNumeric(),
    validateAttributes
], adminController.registerFlight);

router.post('/registerCar',[
    check('name', 'Name is required').not().isEmpty(),
    check('brand', 'Brand is required').not().isEmpty(),
    check('model', 'Model is required').not().isEmpty(),
    check('plate', 'Plate is required').not().isEmpty(),
    check('price', 'Price is required').isNumeric(),
    check('city', 'City is required').not().isEmpty(),
    validateAttributes
], adminController.registerCar);

router.post('/delete',[
    check('user', 'Username is required').not().isEmpty(),
    //check('email', 'Email is required').isEmail(),
    check('password', 'Password is required').not().isEmpty(),
    validateAttributes
], adminController.elimination);

router.post('/deleteFly',[
    check('name', 'Name is required').not().isEmpty(),
    check('origin', 'Origin is required').not().isEmpty(),
    check('destiny', 'Destiny is required').not().isEmpty(),
    check('days', 'Days is required').isNumeric(),
    validateAttributes
], adminController.eliminationFlight);

router.post('/deleteCar',[
    check('plate', 'Password is required').not().isEmpty(),
    validateAttributes
], adminController.eliminationCar);

module.exports = router;