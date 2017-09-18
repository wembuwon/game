'use strict';


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AccionModelo = new Schema({
  mapa: {
    type: String,
    Required: 'Mapa al que pertenece'
  },
  coorX: {
    type: Number,
    Required: 'Coordenada X de destino'
  },
  coorY: {
    type: Number,
    Required: 'Coordenada Y de destino'
  },
  tipo: {
    type: String,
    enum: ['movimiento', 'saqueo', 'conquista', 'destruccion', 'colonizacion'],
    default: 'movimiento'
  },
  fecha_llegada: {
    type: Date,
    default: Date.now
  }
});


module.exports = mongoose.model('AccionModelo', AccionModelo);