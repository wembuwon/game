'use strict';


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RegimientoModelo = new Schema({
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
  poosicion: {
    type: Number,
    Required: 'Posicionamiento del regimiento dentro del ejercito'
  },
  id_unidad: {
    type: String,
    default: ""
  },
  cantidad: {
    type: Number,
    default: 0
  },
  id_accion: {
    type: String,
    default: ""
  }
});


module.exports = mongoose.model('RegimientoModelo', RegimientoModelo);