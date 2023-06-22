var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    var name = req.query.name || 'Guest';
    res.send('witaj Michael!');
 });

 module.exports = router;
