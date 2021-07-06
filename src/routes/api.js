const router  =  require('express').Router();
const calculationControlelr = require('../controllers/calculationController');
const axios = require('axios');

router.get('/',(req,res)=>{
    console.log("this is service connector home route");
    res.send('this is service connector home route');
});

router.post('/service/factorial',calculationControlelr.factorial);
router.post('/service/average',calculationControlelr.average);

module.exports = router;