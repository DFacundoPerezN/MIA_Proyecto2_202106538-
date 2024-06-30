const { Router } = require('express'); //npm install express
const { check } = require('express-validator'); //npm install express-validator
const validateAttributes = require('../middlewares/validateAttributes');

const receptionController = require('../controllers/reception.controller');

const router = Router();

router.get('/', (req, res) => {
    res.status(200).json({ 
        message: 'Hello Employee' 
    });
});

router.post('/deleteCarRequest',[
    check('user', 'Username is required').not().isEmpty(),
    check('plate', 'Plate is required').not().isEmpty(),
    validateAttributes
], receptionController.carRequest);

router.post('/deleteFlightRequest',[
    check('user', 'Username is required').not().isEmpty(),
    check('origin', 'Origin is required').not().isEmpty(),
    check('destiny', 'Destiny is required').not().isEmpty(),
    check('days', 'Days is required').not().isEmpty(),
    validateAttributes
], receptionController.flightRequest);

router.get('/getRequests',
    receptionController.getRequests);
    
router.get('/getUsers',
    receptionController.getPeople);
    

module.exports = router;