var express = require('express');
var router = express.Router();

router.get('/', function(req,res,next){
    res.render('rampage-of-the-dead',{idU: req.session.idU});
});

module.exports = router;