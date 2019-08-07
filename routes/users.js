var express = require('express');
var router = express.Router();
var db = require('./db')

/* GET home page. */
router.get('/:id', function(req, res, next) {

  if(req.session.email == null){
    res.render('login',{mensaje:'Acceso Denegado, logeate primero.'});
  }

  var id = req.params.id;
  var queryPublicaciones = "select * from publicaciones where creador_id="+id+"";
  
  db.query(queryPublicaciones, function(error,result){
    if(error){
      console.log(error);
    }

    res.render('users', { publicaciones:result,idU: req.session.idU });
  });
});

module.exports = router;
