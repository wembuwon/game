'use strict';

var mongoose = require('mongoose'),
    casillaDao = require('../dao/casillaDAO'),
    casilla = mongoose.model('CasillaModelo'),
    filtros = mongoose.model('CasillaCriteria');



exports.getCasillas = function(req, res) {
  casilla = casillaDao.obtener_casillas2(filtros);
    if (err)
      res.send(err);
    res.json(casilla);
};


