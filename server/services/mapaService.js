'use strict';

var mongoose = require('mongoose'),
    casillaDao = require('../dao/casillaDAO'),
    casilla = mongoose.model('CasillaModelo');



exports.getCasillas = function(req, res) {
  mapaDao = new casillaDao.CasillaDAO();
  var casillas = mapaDao.obtener_casillas_mapa();
    if (err)
      res.send(err);
    res.json(casillas);
};


