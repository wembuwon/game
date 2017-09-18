'use strict';


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var InvestigacionModelo = new Schema({
  id_imperio: {
    type: String,
    Required: 'Imperio que desarrolla la investigación'
  },
  id_tecnologia: {
    type: String,
    Required: 'Tecnologia que se desarrolla'
  },
  nivel: {
    type: Number,
    default: 0
  },
  tiempo_investigacion: {
    type: Number,
    default: 0
  },
  modificacion: {
    type: Date,
    default: Date.now
  }
});


module.exports = mongoose.model('InvestigacionModelo', InvestigacionModelo);