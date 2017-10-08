'use strict';
require('../models/edificioModelo');
var mongoose = require('mongoose'),
    conexion = require('../../config.json'),
    Edificio = mongoose.model('EdificioModelo');


exports.obtener_edificios = function(callback) {  
  mongoose.connect(conexion.conexionbd);
  
  Edificio.find({}, function(err, edificios) {
    if (err)
      callback(err, "");
    callback("", edificios);
  });
  
  mongoose.disconnect();
};

exports.obtener_edificio = function(id_edificio, callback) {
  mongoose.connect(conexion.conexionbd);

  Edificio.findById(id_edificio, function(err, edificio) {
    if (err)
      callback(err, "");
    callback("", edificio);
  });
  
  mongoose.disconnect();
};


exports.anadir_edificio = function(req, res) {
  mongoose.connect(conexion.conexionbd);
  var nuevo_edificio = new Edificio(req.body);
  nuevo_edificio.save(function(err, edificio) {
    if (err)
      res.send(err);
    res.json(edificio);
  });
  mongoose.disconnect();
};

exports.modificar_edificio = function(req, res) {
  mongoose.connect(conexion.conexionbd);
  Edificio.findOneAndUpdate({_id:req.params.edificioId}, req.body, {new: true}, function(err, edificio) {
    if (err)
      res.send(err);
    res.json(edificio);
  });
  mongoose.disconnect();
};

exports.borrar_edificio = function(req, res) {
  mongoose.connect(conexion.conexionbd);
  Edificio.remove({
    _id: req.params.edificioId
  }, function(err, edificio) {
    if (err)
      res.send(err);
    res.json({ message: 'Edificio eliminado correctamente' });
  });
  mongoose.disconnect();
};
