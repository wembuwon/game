'use strict';

module.exports = function(app) {
	var mapa = require('../dao/casillaDAO');

	app.route('/mapa')
		.get(mapa.obtener_casillas)
		.post(mapa.anadir_casilla);

	app.route('/mapa/:casillaId')
		.get(mapa.obtener_casilla)
		.put(mapa.modificar_casilla)
		.delete(mapa.borrar_casilla);

	var mapa2 = require('../services/casillaService');
	app.route('/mapa2')
		.get(mapa2.getCasillas);
};
