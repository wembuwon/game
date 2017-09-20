'use strict';


var mongoose = require('mongoose'),
    conexion = require('../../config.json'),
    casillaDAO = require('../dao/casillaDAO'),
    bodyParser = require('body-parser');

/*class CasillaDAO {
    constructor() {
    }
    obtener_casillas_mapa(values) {
        console.log('connect: '+conexion.conexionbd);
        mongoose.connect(conexion.conexionbd);
        console.log('casilla.find');
        values = Casilla.find({}, function(err, value) {
            //res.json(value);
            callback("", value);
        });
console.log('value');
console.log(values);
        console.log('disconnect');
        mongoose.disconnect();
    }
    
}*/
  
exports.getCasillas = function(req, res) {
  var texto = "Hola mundo";
  casillaDAO.obtener_casillas2(function (err, value) {
  console.log('mapa');
  console.log(value);
  console.log(texto);
  res.json(value);
    //if (casillas == 0)
      //res.json({ message: 'ERROR' });
    //res.json(res);
    });

};








