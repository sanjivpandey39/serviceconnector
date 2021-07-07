const router = require('express').Router();
const courseController = require('../controllers/courseController');

router.post('/add',courseController.add)
router.get('/list',courseController.list)

module.exports = router;