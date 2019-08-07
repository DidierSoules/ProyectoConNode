var mysql = require('mysql');
var conexion = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'proyectofrontend'
});

conexion.connect(function(error){
    if (error) {
        console.log(error);
    } else{
        console.log("Conexion a la database.");
    }
});
module.exports = conexion;