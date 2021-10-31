var express = require('express')
var router = express.Router()

router.get('/', function(req, res) {
    console.log("API info stuff")
})

router.get('/status', function(req, res) {
    res.sendStatus(200);
})

module.exports = router