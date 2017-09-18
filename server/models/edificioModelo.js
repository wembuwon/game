'use strict';


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EdificioModelo = new Schema({
  nombre: {
    type: String,
    Required: 'Nombre del edificio'
  },
  descripcion: {
    type: String,
    default: ""
  },
  tipo: {
    type: String,
    enum: ['recoleccion', 'militar', 'civil'],
    default: 'civil'
  },
  madera: {
    type: Number,
    default: 0
  },
  piedra: {
    type: Number,
    default: 0
  },
  metal: {
    type: Number,
    default: 0
  },
  planos: {
    type: Number,
    default: 0
  },
  tiempo_construccion: {
    type: Number,
    default: 0
  },
  espacio: {
    type: Number,
    default: 0
  },
  capacidad: {
    type: Number,
    default: 0
  },
  base: {
    type: Number,
    default: 0
  },
  coeficiente: {
    type: Number,
    default: 0
  }
});


module.exports = mongoose.model('EdificioModelo', EdificioModelo);