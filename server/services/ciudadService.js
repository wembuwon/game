'use strict';


var mongoose = require('mongoose'),
    conexion = require('../../config.json'),
    util = require('../transversal/util'),
    construccionDAO = require('../dao/construccionDAO'),
    edificioDAO = require('../dao/edificioDAO'),
    ciudadDAO = require('../dao/ciudadDAO'),
    bodyParser = require('body-parser'),
    Construccion = mongoose.model('ConstruccionModelo'),
    Edificio = mongoose.model('EdificioModelo'),
    Ciudad = mongoose.model('CiudadModelo');


function actualizarCiudad (ciudad){
  // variables para contar los trabadores que quedan
  var trabajadores_comida = ciudad.trabajadores_comida;
  var trabajadores_madera = ciudad.trabajadores_madera;
  var trabajadores_piedra = ciudad.trabajadores_piedra;
  var trabajadores_metal = ciudad.trabajadores_metal;
  var buscadores_planos = ciudad.buscadores_planos;
  construccionDAO.obtener_construcciones(ciudad._id, function(err,construcciones){
    if (err) {
      res.send(err);
    }

  });
  // si el edificio está en construción se mira cuanto ha avanzada desde la última actualización
  /*
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
  */
  return ciudad;
}

exports.getCiudades = function(req, res) {
  
  ciudadDAO.obtener_ciudades(req.query.id_imperio, function (err, ciudades) {
    if (err) {
      res.send(err);
    }

    ciudades.forEach(function(ciudad) {
      ciudad = actualizarCiudad (ciudad);
    }, this);

    res.json(ciudades);
  });

};

exports.getCiudad = function(req, res) {
  ciudadDAO.obtener_ciudad(req.params.id_ciudad, function (err, ciudad) {
    if (err) {
      res.send(err);
    }
    ciudad = actualizarCiudad (ciudad);
    res.json(ciudad);
  });

};

exports.addCiudad = function(req, res)
{
  var nueva_ciudad = new Ciudad(req.body);
  ciudadDAO.anadir_ciudad(nueva_ciudad, function (err, value) {
    if (err) {
      res.send(err);
    }
    res.json(value);
  });
}

exports.editCiudad = function(req, res) {
  var nuevos_datos = new Ciudad(req.body);
  ciudadDAO.obtener_ciudad(req.params.id_ciudad, function (err, ciudad) {
    if (err) {
      res.send(err);
    }
    ciudad = actualizarCiudad (ciudad);
    res.json(ciudad);
    /*
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
    }*/
  });

};

exports.deleteCiudad = function(req, res) {
  ciudadDAO.borrar_ciudad(req.params.id_ciudad, function (err, mensaje) {
    if (err) {
      res.send(err);
    }
    res.json({ message: mensaje });
  });
}
