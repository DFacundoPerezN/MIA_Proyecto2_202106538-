const { Router } = require('express'); //npm install express
const { check } = require('express-validator'); //npm install express-validator
const validateAttributes = require('../middlewares/validateAttributes');

const userController = require('../controllers/user.controller');

const router = Router();

router.get('/', (req, res) => {
    res.status(200).json({ 
        message: 'Hello User' 
    });
});

router.post('/login',[
    check('user', 'Username is required').not().isEmpty(),
    //check('email', 'Email is required').isEmail(),
    check('password', 'Password is required').not().isEmpty(),
    validateAttributes
], userController.login);

router.post('/carRequest',[
    check('user', 'Username is required').not().isEmpty(),
    check('plate', 'Plate is required').not().isEmpty(),
    validateAttributes
], userController.carRequest);

router.post('/flightRequest',[
    check('user', 'Username is required').not().isEmpty(),
    check('origin', 'Origin is required').not().isEmpty(),
    check('destiny', 'Destiny is required').not().isEmpty(),
    check('days', 'Days is required').not().isEmpty(),
    validateAttributes
], userController.flightRequest);

router.get('/getFlights',
    userController.getFlights);
router.get('/getCars',
    userController.getCars);

module.exports = router;