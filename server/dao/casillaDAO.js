'use strict';
require('../models/casillaModelo');
var mongoose = require('mongoose'),
    conexion = require('../../config.json'),
    Casilla = mongoose.model('CasillaModelo');


exports.obtener_casillas = function(mapa, callback) {  
  mongoose.connect(conexion.conexionbd);
  
  Casilla.find({'mapa':mapa}, function(err, casillas) {
    if (err)
      callback(err, "");
    callback("", casillas);
  });
  
  mongoose.disconnect();
};

exports.obtener_casilla = function(id_casilla, callback) {
  mongoose.connect(conexion.conexionbd);

  Casilla.findById(id_casilla, function(err, casilla) {
    if (err)
      callback(err, "");
    callback("", casilla);
  });
  
  mongoose.disconnect();
};
/*
exports.obtener_casillas = function(req, res) {
  mongoose.connect(conexion.conexionbd);
  Casilla.find({}, function(err, casilla) {
    if (err)
      res.send(err);
    res.json(casilla);
  });
  mongoose.disconnect();
};
exports.obtener_casilla = function(req, res) {
  mongoose.connect(conexion.conexionbd);
  Casilla.findById(req.params.casillaId, function(err, casilla) {
    if (err)
      res.send(err);
    res.json(casilla);
  });
  mongoose.disconnect();
};

*/

//Estas se habilitan para hacer las primeras inserciones
exports.anadir_casilla = function(req, res) {
  mongoose.connect(conexion.conexionbd);
  var nueva_casilla = new Casilla(req.body);
  nueva_casilla.save(function(err, casilla) {
    if (err)
      res.send(err);
    res.json(casilla);
  });
  mongoose.disconnect();
};

exports.modificar_casilla = function(req, res) {
  mongoose.connect(conexion.conexionbd);
  Casilla.findOneAndUpdate({_id:req.params.casillaId}, req.body, {new: true}, function(err, casilla) {
    if (err)
      res.send(err);
    res.json(casilla);
  });
  mongoose.disconnect();
};

exports.borrar_casilla = function(req, res) {
  mongoose.connect(conexion.conexionbd);
  Casilla.remove({
    _id: req.params.casillaId
  }, function(err, casilla) {
    if (err)
      res.send(err);
    res.json({ message: 'Casilla eliminada correctamente' });
  });
  mongoose.disconnect();
};
