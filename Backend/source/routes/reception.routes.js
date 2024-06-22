const { Router } = require('express'); //npm install express

const router = Router();

router.get('/admin', (req, res) => {
    res.status(200).json({ message: 'Hello Employe' });
});

module.exports = router;