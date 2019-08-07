var express = require('express');
var router = express.Router();
var db = require('./db');

/* GET home page. */
router.get('/', function(req, res, next) {
  var queryPublicaciones = "select * from publicaciones order by id desc";
  var queryMasVistos = "select * from publicaciones order by vistas desc limit 5";
  db.query(queryPublicaciones, function(error,result){
    if(error){
      console.log(error);
    }
    db.query(queryMasVistos, function(error,resultado){
      if(error){
        console.log(error);
      }
      res.render('index', { publicaciones:result ,populares: resultado, idU: req.session.idU});
    });
  });
});

module.exports = router;
