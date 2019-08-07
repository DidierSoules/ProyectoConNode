var express = require('express');
var router = express.Router();

router.get('/', function(req,res,next){
    res.render('the-fog',{idU: req.session.idU});
});

module.exports = router;