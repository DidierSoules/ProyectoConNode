var express = require('express');
var router = express.Router();
var db = require('./db');
var md5 = require('md5');

router.get('/', function(req,res,next){
    res.render('signup',{idU: req.session.idU});
});

router.post('/', function(req,res,next){
    // los req tienen al final en name del form
    var email = req.body.Email1;
    var password1 = md5(req.body.Password1);
    var password2 = md5(req.body.Password1);
    if(password1 == password2 && password1 != null){
        var consulta = "insert into usuarios (email,password) values ('"+email+"','"+password1+"')";
    }
    else{
        res.render('signup',{mensaje:'Datos incorrectos',idU: req.session.idU});
    }
    
    db.query(consulta,function(error, resultado){
        if (error) {
            console.log(error)
        }
        else{
            res.render('login',{idU: req.session.idU});
        }
    });
});

module.exports = router;