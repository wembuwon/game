'use strict';


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CiudadModelo = new Schema({
  mapa: {
    type: String,
    Required: 'Mapa al que pertenece'
  },
  coorX: {
    type: Number,
    Required: 'Coordenada X'
  },
  coorY: {
    type: Number,
    Required: 'Coordenada Y'
  },
  id_imperio: {
    type: String,
    Required: 'Identificador del imperio'
  },
  nombre: {
    type: String,
    default: ""
  },
  comida: {
    type: Number,
    default: 0
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
  poblacion: {
    type: Number,
    default: 0
  },
  espacio: {
    type: Number,
    default: 0
  },
  trabajadores_comida: {
    type: Number,
    default: 0
  },
  trabajadores_madera: {
    type: Number,
    default: 0
  },
  trabajadores_piedra: {
    type: Number,
    default: 0
  },
  trabajadores_metal: {
    type: Number,
    default: 0
  },
  buscadores_planos: {
    type: Number,
    default: 0
  },
  constructores: {
    type: Number,
    default: 0
  },
  modificacion: {
    type: Date,
    default: Date.now
  }
});


module.exports = mongoose.model('CiudadModelo', CiudadModelo);