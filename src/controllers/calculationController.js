module.exports = {
    factorial:(req,res)=>{
        const number = req.body.number;
        const axios  = require('axios');
        axios.post('http://127.0.0.1:2010/factorial',{
            "number":number
        })
            .then(function (response) {
                // handle success
                res.json(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                console.log("always executed for factorial");
            });

    },
    average:(req,res)=>{
        var numbersArray = req.body.numbersArray
        const axios  = require('axios');
        axios.post('http://127.0.0.1:2020/average',{
            "numbersArray":numbersArray
        })
            .then(function (response) {
                // handle success
                res.json(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                console.log("always executed for average");
            });

    }
}