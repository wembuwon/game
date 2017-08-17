'use strict';

var mongoose = require('mongoose'),
    conexion = require('../../config.json'),
    Casilla = mongoose.model('CasillaModelo');

function CasillaDAO (){
  this.conexion = require('../../config.json');
  this.mongoose = require('mongoose')
}

CasillaDAO.prototype.obtener_casillas_mapa = function(){
  this.mongoose.connect(this.conexion.conexionbd);
  casilla = mongoose.model('CasillaModelo');
  casilla.find({}, function(err, casilla) {
    if (err)
      return err;
    return casilla;
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
