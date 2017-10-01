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
  console.log(req.query);
  console.log("mapa:"+req.query.id_mapa)
  casillaDAO.obtener_casillas(req.query.id_mapa, function (err, value) {
    if (err)
      res.send(err);
    res.json(value);
  });

};

exports.getCasilla = function(req, res) {
  
  casillaDAO.obtener_casilla(req.params.id_casilla, function (err, value) {
    if (err)
      res.send(err);
    res.json(value);
  });

};








