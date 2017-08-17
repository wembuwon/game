'use strict';

var mongoose = require('mongoose'),
    casillaDao = require('../dao/casillaDAO'),
    casilla = mongoose.model('CasillaModelo');


class CasillaDAO {
    constructor() {
        this.conexion = require('../../config.json');
        this.mongoose = require('mongoose');
    }
    obtener_casillas_mapa() {
        this.mongoose.connect(this.conexion.conexionbd);
        casilla = mongoose.model('CasillaModelo');
        casilla.find({}, function(err, casilla) {
            if (err)
                return err;
            return casilla;
        });
        mongoose.disconnect();
    }
}
  

exports.getCasillas = function(req, res) {
  var mapaDao = new CasillaDAO();
  var casillas = mapaDao.obtener_casillas_mapa();
    if (err)
      res.send(err);
    res.json(casillas);
};


