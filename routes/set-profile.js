var express = require('express');
var router = express.Router();
var db = require('./db');

router.get('/', function(req,res,next){
    if(req.session.idU == null){
        res.render('login',{mensaje:'Acceso Denegado, logeate primero.'});
    }
    res.render('set-profile',{idU: req.session.idU});
});

router.post('/', function(req,res,next){
    if(req.session.idU == null){
        res.render('login',{mensaje:'Acceso Denegado, logeate primero.'});
    }

    console.log(req.files.ElFile);
    var AFile = req.files.ElFile;
    var nombreFile = AFile.name;
    var nombre = req.body.Nombre1;
    var descripcion = req.body.Descripcion1;

    if(req.session.idU == null){
        res.render('login',{mensaje:'Acceso Denegado, logeate primero.'});
    } 
    /*
    var data = {
        nombre:req.body.Nombre1,
        descripcion:req.body.Descripcion1,
        foto:"/images/"+nombreFile,
    };
    */


    if(AFile.mimetype == "image/jpeg" || AFile.mimetype == "image/png" || AFile.mimetype == "image/jpg"){
        AFile.mv('./public/images/'+nombreFile,function(error){
            if(error){
                console.log(error);
            }
            
        });
    }
    /*
    db.query('update usuarios set ? where idU='+req.session.idU,data,function(error,result) {
        if (error) {
            console.log(error);
        }
        else{
            console.log()
            res.redirect('/social');
        }
    });
    */

   var consulta = "update usuarios set nombre='"+nombre+"',descripcion='"+descripcion+"',foto='/images/"+nombreFile+"' where id="+req.session.idU;
   console.log(consulta);
   db.query(consulta,function(error, resultado){
        if (error) {
            console.log(error);
        }
        else{
            console.log()
            res.redirect('/social');
        }
    });


});

module.exports = router;