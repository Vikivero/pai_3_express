var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    let name = req.query.name || 'Guest';
    res.send(`Witaj ${name}!`);
 });

 module.exports = router;
