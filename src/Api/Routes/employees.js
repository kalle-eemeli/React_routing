var express = require('express')
var router = express.Router()
var fs = require('fs')

router.get('/', function(req, res) {

    fs.readFile('./Utils/employees.json', 'utf-8', function(err, data) {
        console.log(data);
        res.status(200).json(data)
    })

    //console.log("Employees stuff");
    //res.status(200).json('Employees stuff');
})

/*TODO post, del, update*/

module.exports = router