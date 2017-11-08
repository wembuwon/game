'use strict';
require('../models/ciudadModelo');
var mongoose = require('mongoose'),
    conexion = require('../../config.json'),
    Ciudad = mongoose.model('CiudadModelo');


exports.obtener_ciudades = function(imperio, callback) {  
  mongoose.connect(conexion.conexionbd);
  
  Ciudad.find({'id_imperio':imperio}, function(err, ciudades) {
    if (err)
      callback(err, "");
    callback("", ciudades);
  });
  
  mongoose.disconnect();
};

exports.obtener_ciudad = function(id_ciudad, callback) {
  mongoose.connect(conexion.conexionbd);
  Ciudad.findById(id_ciudad, function(err, ciudad) {
    if (err)
      callback(err, "");
    callback("", ciudad);
  });
  
  mongoose.disconnect();
};

exports.anadir_ciudad = function(ciudad, callback) {
  mongoose.connect(conexion.conexionbd);
  
  ciudad.save(function(err, ciudad) {
    if (err)
      callback(err, "");
    callback("", ciudad);
  });
  
  mongoose.disconnect();
};

exports.modificar_ciudad = function(ciudad, callback) {
  mongoose.connect(conexion.conexionbd);
  Ciudad.findOneAndUpdate({_id:ciudad._id}, ciudad, {new: true}, function(err, ciudad) {
    if (err)
      callback(err, "");
    callback("", ciudad);
  });
  mongoose.disconnect();
};

exports.borrar_ciudad = function(id_ciudad, callback) {
  mongoose.connect(conexion.conexionbd);
  Ciudad.remove({_id: id_ciudad}, function(err, value) {
    if (err){
      callback(err, "");
    }
    callback("", "Edificio eliminado correctamente");
  });
  mongoose.disconnect();
};

