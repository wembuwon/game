'use strict';


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ConstruccionModelo = new Schema({
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
  id_edificio: {
    type: String,
    Required: 'tipo de edificación'
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
  modificacion: {
    type: Date,
    default: Date.now
  }
});


module.exports = mongoose.model('ConstruccionModelo', ConstruccionModelo);