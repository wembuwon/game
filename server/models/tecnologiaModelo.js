'use strict';


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TecnologiaModelo = new Schema({
  nombre: {
    type: String,
    Required: 'Nombre de la tecnologia'
  },
  descripcion: {
    type: String,
    default: ""
  },
  tiempo_investigacion: {
    type: Number,
    default: 0
  },
  dependencia1: {
    type: String,
    default: ""
  },
  dependencia2: {
    type: String,
    default: ""
  }
});


module.exports = mongoose.model('TecnologiaModelo', TecnologiaModelo);