const router = require('express').Router();
const courseController = require('../controllers/courseController');

router.post('/add',courseController.add)
router.get('/list',courseController.list)
router.put('/update/:id',courseController.findAndUpdate)

module.exports = router;