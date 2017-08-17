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
  }
});


module.exports = mongoose.model('CasillaCriteria', CasillaCriteria);