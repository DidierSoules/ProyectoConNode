var express = require('express');
var router = express.Router();
var db = require('./db');

router.get('/', function(req,res,next){

    if(req.session.email == null){
        res.render('login',{mensaje:'Acceso Denegado, logeate primero.'});
    }
    res.render('newpost',{idU: req.session.idU});
});


router.post('/', function(req,res,next){
    var titulo = req.body.titulo;
    var subtitulo = req.body.subtitulo;
    var descripcion = req.body.descripcion;
    var AFile = req.files.Nfile;
    var nombreFile = AFile.name;
    var id = 1;
    console.log(nombreFile);

    if(req.session.email == null){
        res.render('login',{mensaje:'Acceso Denegado, logeate primero.',idU: req.session.idU});
    } 

    var data = {
        Titulo : req.body.titulo,
        SubTitulo : req.body.subtitulo,
        Descripcion: req.body.descripcion,
        Imagen : "/images/"+nombreFile,
        creador_id : req.session.idU,
        vistas : 0
    };


    if(AFile.mimetype == "image/jpeg" || AFile.mimetype == "image/png" || AFile.mimetype == "image/jpg"){
        AFile.mv('./public/images/'+nombreFile,function(error){
            if(error){
                console.log(error);
            }
            
        });
    }

    // var consulta = "insert into publicaciones (Titulo,SubTitulo,Descripcion,Imagen,creador_id,vistas) values ('"+titulo+"','"+subtitulo+"','"+descripcion+"','/images/"+nombreFile+"','"+req.session.idU+"',0)";
     db.query('insert into publicaciones set ?',data,function(error,result) {
    // db.query(consulta,function(error, resultado){
        if (error) {
            console.log(error);
        }
        else{
            console.log()
            res.redirect('/');
        }
    // });
});
});

module.exports = router;