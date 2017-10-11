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