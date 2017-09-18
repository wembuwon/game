'use strict';


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UnidadModelo = new Schema({
  id_raza: {
    type: String,
    default: ""
  },
  nombre: {
    type: String,
    Required: 'Nombre de la unidad'
  },
  descripcion: {
    type: String,
    default: ""
  },
  tipo: {
    type: String,
    enum: ['caballeria', 'arquero', 'espada', 'lanza', 'acorazado'],
    default: 'espada'
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
  tiempo_entrenamiento: {
    type: Number,
    default: 0
  },
  movimiento: {
    type: Number,
    default: 0
  },
  velocidad: {
    type: Number,
    default: 0
  },
  habilidad_combate: {
    type: Number,
    default: 0
  },
  habilidad_distancia: {
    type: Number,
    default: 0
  },
  fuerza: {
    type: Number,
    default: 0
  },
  dureza: {
    type: Number,
    default: 0
  },
  liderazgo: {
    type: Number,
    default: 0
  }
});


module.exports = mongoose.model('UnidadModelo', UnidadModelo);