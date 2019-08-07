var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

router.get('/', function(req, res, next) {
  res.render('contact',{idU: req.session.idU});
});

router.post('/', function(req,res,next){
  var mail = req.body.mail;
  var asunto = req.body.asunto;
  var mensaje = req.body.mensaje;

  var transporter = nodemailer.createTransport({
    host:'smtp.gmail.com',
    port:587,
    secure: false,
    auth:{
        user:"horizon.media.contact@gmail.com",
        pass:"Asd12345"
    },
    tls:{
        rejectUnauthorized: false
    }
  });

  var mailOptions={
      from:''+mail+'<horizon.media.contact@gmail.com>',
      to: "<horizon.media.contact@gmail.com>",
      subject:asunto,
      text:mensaje
  };

  nodemailer.createTestAccount(function(error,cuenta){
    transporter.sendMail(mailOptions,function(err,info){
        if(err){
            console.log(err);
        }
        else{
            console.log(info);
        }
    });
  });

  res.render('contact',{correcto: "Consulta Enviada"});

});
module.exports = router;