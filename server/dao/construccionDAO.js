'use strict';
require('../models/construccionModelo');
var mongoose = require('mongoose'),
    conexion = require('../../config.json'),
    Construccion = mongoose.model('ConstruccionModelo');


exports.obtener_construcciones = function(ciudad, callback) {  
  mongoose.connect(conexion.conexionbd);
  
  Construccion.find({'id_ciudad':ciudad}, function(err, construcciones) {
    if (err)
      callback(err, "");
    callback("", construcciones);
  });
  
  mongoose.disconnect();
};

exports.obtener_construccion = function(id_construccion, callback) {
  mongoose.connect(conexion.conexionbd);
  Construccion.findById(id_construccion, function(err, construccion) {
    if (err)
      callback(err, "");
    callback("", construccion);
  });
  
  mongoose.disconnect();
};

exports.anadir_construccion = function(construccion, callback) {
  mongoose.connect(conexion.conexionbd);
  
  construccion.save(function(err, construccion) {
    if (err)
      callback(err, "");
    callback("", construccion);
  });
  
  mongoose.disconnect();
};

exports.modificar_construccion = function(construccion, callback) {
  mongoose.connect(conexion.conexionbd);
  Construccion.findOneAndUpdate({_id:construccion._id}, construccion, {new: true}, function(err, construccion) {
    if (err)
      callback(err, "");
    callback("", construccion);
  });
  mongoose.disconnect();
};

exports.borrar_construccion = function(id_construccion, callback) {
  mongoose.connect(conexion.conexionbd);
  Construccion.remove({_id: id_construccion}, function(err, construccion) {
    if (err){
      callback(err, "");
    }
    callback("", "Edificio eliminado correctamente");
  });
  mongoose.disconnect();
};

