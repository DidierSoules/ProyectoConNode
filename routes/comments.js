var express = require('express');
var router = express.Router();
var db = require('./db');

router.post('/', function(req,res,next){
    var comentario = req.body.comentario;

    if(req.session.idU == null){
        res.render('login',{mensaje:'Acceso Denegado, logeate primero.',idU: req.session.idU});
    } 

    var checkeoUsuario = "select * from usuarios where id="+req.session.idU;

    db.query(checkeoUsuario,function(error,resultadoUsuario){
        if (error) {
            console.log(error);
        }
        else{
            if(resultadoUsuario[0].nombre == null){
                res.render('set-profile',{mensaje:'Acceso Denegado, genera tu perfil primero.',idU: req.session.idU})
            }
            else{

            
            var insertDeComentario = "insert into comentarios (id_creador,id_post,comentario) values ("+resultadoUsuario[0].id+","+req.session.idPost+",'"+comentario+"')";
            db.query(insertDeComentario,function(error,resultadoComentario){
                if (error) {
                    console.log(error);
                }
                else{
                    res.redirect('/post/'+req.session.idPost);
                }
            });
            }
        }
    });
});

module.exports = router;