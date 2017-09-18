'use strict';


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ImperioModelo = new Schema({
  nombre: {
    type: String,
    Required: 'Denominación del imperio'
  },
  id_usuario: {
    type: String,
    default: ''
  },
  id_raza: {
    type: String,
    default: ''
  }
});


module.exports = mongoose.model('ImperioModelo', ImperioModelo);