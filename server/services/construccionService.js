'use strict';


var mongoose = require('mongoose'),
    conexion = require('../../config.json'),
    util = require('../transversal/util'),
    construccionDAO = require('../dao/construccionDAO'),
    edificioDAO = require('../dao/edificioDAO'),
    bodyParser = require('body-parser'),
    Construccion = mongoose.model('ConstruccionModelo'),
    Edificio = mongoose.model('EdificioModelo');


function actualizarConstruccion (construccion){
  // si el edificio está en construción se mira cuanto ha avanzada desde la última actualización
  if (construccion.tiempo_construccion > 0) {
    var fecha = new Date();
    var diferencia = (fecha - construccion.modificacion) / 86400000; // 86400000 son los milisegundos de un día
    var trabajado = diferencia * construccion.trabajadores;
    construccion.tiempo_construccion -= trabajado;
    construccion.modificacion = fecha;
    // se mira si se ha terminado de construir
    if (construccion.tiempo_construccion < 0) {
      construccion.tiempo_construccion = 0;
      construccion.trabajadores = 0;
    }
    construccionDAO.modificar_construccion(construccion, function (err, construccion) {} );
  }
  return construccion;
}

exports.getConstrucciones = function(req, res) {
  
  construccionDAO.obtener_construcciones(req.query.id_ciudad, function (err, construcciones) {
    if (err) {
      res.send(err);
    }

    construcciones.forEach(function(construccion) {
      construccion = actualizarConstruccion (construccion);
    }, this);

    res.json(construcciones);
  });

};

exports.getConstruccion = function(req, res) {
  construccionDAO.obtener_construccion(req.params.id_construccion, function (err, construccion) {
    if (err) {
      res.send(err);
    }
    construccion = actualizarConstruccion (construccion);
    res.json(construccion);
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

exports.editConstruccion = function(req, res) {
  var nuevos_datos = new Construccion(req.body);
  construccionDAO.obtener_construccion(req.params.id_construccion, function (err, construccion) {
    if (err) {
      res.send(err);
    }
    construccion = actualizarConstruccion (construccion);
    construccion.trabajadores = nuevos_datos.trabajadores;
    // solo se puede subir de nivel cuando la construcción del nivel actual está terminada
    if (construccion.tiempo_construccion == 0 && construccion.nivel < nuevos_datos.nivel){
      edificioDAO.obtener_edificio(construccion.id_edificio, function (err, edificio) {
        var tiempoTotal = util.actualizaValor(edificio.tiempo_construccion,nuevos_datos.nivel);
        var tiempoConstrido = util.actualizaValor(edificio.tiempo_construccion,construccion.nivel);
        construccion.tiempo_construccion = tiempoTotal - (tiempoConstrido/2);
        construccion.nivel = nuevos_datos.nivel;
        construccionDAO.modificar_construccion(construccion, function (err, construccion) {} );
        res.json(construccion);
      });
    }
    else{
      construccionDAO.modificar_construccion(construccion, function (err, construccion) {} );
      res.json(construccion);
    }
  });

};





