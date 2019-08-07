var express = require('express');
var router = express.Router();
var db = require('./db');

router.get('/', function(req,res,next){

    if(req.session.idU == null){
        res.redirect('login');
    }
    else{
    var queryCheckForProfile = "SELECT nombre FROM `usuarios` where id="+req.session.idU;
    db.query(queryCheckForProfile,function(error,result){
        if(error){
            console.log(error);
        }
        if(result[0].nombre==null){
            res.render('set-profile',{mensaje:'Acceso Denegado, genera tu perfil primero.',idU: req.session.idU})
        }
        else{
            var queryUsers = "select * from usuarios where nombre is not null";
            console.log(queryUsers);
            db.query(queryUsers, function(error,result){
                if(error){
                console.log(error);
                }
                res.render('social', { usuarios:result ,idU: req.session.idU});
            });
        }
    });  
    }
});

router.post('/', function(req, res, next) {
    if(req.session.idU == null){
        res.redirect('login');
    } 
    else{
    var queryCheckForProfile = "SELECT nombre FROM `usuarios` where id="+req.session.idU;
    db.query(queryCheckForProfile, function(error,result){
        if(error){
            console.log(error);
        }
        if(result[0].nombre==null){
            res.render('set-profile',{mensaje:'Acceso Denegado, genera tu perfil primero.',idU: req.session.idU})
        }
        else{
            var search = req.body.search2;
            var queryUsers = "select * from usuarios where nombre like '%"+search+"%'";
            console.log(queryUsers);
            db.query(queryUsers, function(error,result){
                if(error){
                console.log(error);
                }
                res.render('social', { usuarios:result ,idU: req.session.idU});
            });
        }
    });
    }
});

module.exports = router;