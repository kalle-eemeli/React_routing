var express = require('express')
var router = express.Router()

router.get('/', function(req, res) {
    console.log("Departments stuff");
    res.status(200).json('Departments stuff');
})

module.exports = router