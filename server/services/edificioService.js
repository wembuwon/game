'use strict';


var mongoose = require('mongoose'),
    conexion = require('../../config.json'),
    edificioDAO = require('../dao/edificioDAO'),
    bodyParser = require('body-parser');
  
exports.getEdificios = function(req, res) {

  edificioDAO.obtener_edificios(function (err, value) {
    if (err)
      res.send(err);
    res.json(value);
  });

};

exports.getEdificio = function(req, res) {
  
  edificioDAO.obtener_edificio(req.params.id_edificio, function (err, value) {
    if (err)
      res.send(err);
    res.json(value);
  });

};








