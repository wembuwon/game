'use strict';


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ConstruccionModelo = new Schema({
  id_ciudad: {
    type: String,
    Required: 'ciudad en la que se encuentra el edificio'
  },
  id_edificio: {
    type: String,
    Required: 'tipo de edificación'
  },
  tipo: {
    type: String,
    enum: ['recoleccion', 'militar', 'civil'],
    default: 'civil'
  },
  subtipo: {
    type: String,
    default: ''
  },
  nivel: {
    type: Number,
    default: 1
  },
  tiempo_construccion: {
    type: Number,
    default: 0
  },
  trabajadores: {
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
  },
  modificacion: {
    type: Date,
    default: Date.now
  }
});


module.exports = mongoose.model('ConstruccionModelo', ConstruccionModelo);