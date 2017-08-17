'use strict';

var mongoose = require('mongoose'),
    conexion = require('../../config.json'),
    Casilla = mongoose.model('CasillaModelo'),
    filtros = mongoose.model('CasillaCriteria');

exports.obtener_casillas2 = function (filtros){
  mongoose.connect(conexion.conexionbd);
  var lista;
  Casilla.find({}, function(err, lista) {
    if (err)
      throw err;
  });
  mongoose.disconnect();
  return lista;
};

exports.obtener_casillas = function(req, res) {
  mongoose.connect(conexion.conexionbd);
  Casilla.find({}, function(err, casilla) {
    if (err)
      res.send(err);
    res.json(casilla);
  });
  mongoose.disconnect();
};

exports.obtener_casillas = function(req, res) {
  mongoose.connect(conexion.conexionbd);
  Casilla.find({}, function(err, casilla) {
    if (err)
      res.send(err);
    res.json(casilla);
  });
  mongoose.disconnect();
};


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

exports.obtener_casilla = function(req, res) {
  mongoose.connect(conexion.conexionbd);
  Casilla.findById(req.params.casillaId, function(err, casilla) {
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
