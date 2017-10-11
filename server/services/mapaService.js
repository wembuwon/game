'use strict';


var mongoose = require('mongoose'),
    conexion = require('../../config.json'),
    casillaDAO = require('../dao/casillaDAO'),
    bodyParser = require('body-parser');
  
exports.getCasillas = function(req, res) {

  casillaDAO.obtener_casillas(req.query.id_mapa, function (err, value) {
    if (err) {
      res.send(err);
    }
    res.json(value);
  });

};

exports.getCasilla = function(req, res) {
  
  casillaDAO.obtener_casilla(req.params.id_casilla, function (err, value) {
    if (err) {
      res.send(err);
    }
    res.json(value);
  });

};








