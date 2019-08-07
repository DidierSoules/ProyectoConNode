var express = require('express');
var router = express.Router();
var db = require('./db')


router.post('/', function(req, res, next) {
  var search = req.body.search;
  var queryPublicaciones = "select * from publicaciones where Titulo like '%"+search+"%'";
  console.log(queryPublicaciones);
  db.query(queryPublicaciones, function(error,result){
    if(error){
      console.log(error);
    }
    res.render('index', { publicaciones:result ,idU: req.session.idU});
  });
});

module.exports = router;