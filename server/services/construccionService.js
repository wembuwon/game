'use strict';


var mongoose = require('mongoose'),
    conexion = require('../../config.json'),
    construccionDAO = require('../dao/construccionDAO'),
    bodyParser = require('body-parser'),
    construccion = mongoose.model('ConstruccionModelo');
  
exports.getConstrucciones = function(req, res) {
  
  construccionDAO.obtener_construcciones(req.query.id_ciudad, function (err, value) {
    if (err) {
      res.send(err);
    }
    res.json(value);
  });

};

exports.getConstruccion = function(req, res) {
  construccionDAO.obtener_construccion(req.params.id_construccion, function (err, value) {
    if (err) {
      res.send(err);
    }
    res.json(value);
  });

};

exports.addConstruccion = function(req, res)
{
  var nueva_construccion = new construccion(req.body);
  construccionDAO.anadir_construccion(nueva_construccion, function (err, value) {
    if (err) {
      res.send(err);
    }
    res.json(value);
  });
}







