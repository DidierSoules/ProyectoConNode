var express = require('express');
var router = express.Router();
var db = require('./db')

/* GET home page. */
router.get('/:id', function(req, res, next) {
  var id = req.params.id;
  var queryPublicaciones = "select * from publicaciones where id="+id+"";
  req.session.idPost = id;
  
  console.log(queryPublicaciones);
  db.query(queryPublicaciones, function(error,result){
    if(error){
      console.log(error);
    }

    var vistas= parseInt(result[0].vistas) + 1;
    var queryUpdate = "UPDATE publicaciones SET vistas="+vistas+" where id="+id+"";
    db.query(queryUpdate, function(error,result){
      if(error){
        console.log(error);
      }
    });

    //var sendComments = "select * from comentarios where id_post="+id+"";
    var sendComments = "SELECT * FROM usuarios INNER JOIN comentarios ON usuarios.id=comentarios.id_creador WHERE id_post="+id+"";
    var queryCheckForProfile = "SELECT nombre FROM `usuarios` where id="+req.session.idU;
    db.query(sendComments, function(error,resultadoComments){
      if(error){
        console.log(error);
      }
      db.query(queryCheckForProfile, function(error,resultadoNombre){
        if(resultadoNombre==null){
          res.render('post', { publicaciones:result,idU: req.session.idU, comentarios:resultadoComments});
        }
        else{
          res.render('post', { publicaciones:result,idU: req.session.idU, comentarios:resultadoComments, comentar:"yes"});
        }
      });
    });
  });
});

module.exports = router;
