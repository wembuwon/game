'use strict';


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CasillaCriteria = new Schema({
  id_casilla: {
    type: String
  },
  mapa: {
    type: String
  },
  coorX: {
    type: Number
  },
  coorY: {
    type: Number
  },
  tipo: {
    type: String
  },
  comida: {
    type: Number
  },
  madera: {
    type: Number
  },
  piedra: {
    type: Number
  },
  metal: {
    type: Number
  },
  planos: {
    type: Number
  }
});


module.exports = mongoose.model('CasillaCriteria', CasillaCriteria);