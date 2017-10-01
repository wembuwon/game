'use strict';

module.exports = function(app) {

	var mapaDAO = require('../dao/casillaDAO');
	app.route('/mapadao')
//		.get(mapaDAO.obtener_casillas)
		.post(mapaDAO.anadir_casilla);

	app.route('/mapa/:casillaId')
//		.get(mapaDAO.obtener_casilla)
		.put(mapaDAO.modificar_casilla)
		.delete(mapaDAO.borrar_casilla);

	var mapa = require('../services/mapaService');
	app.route('/mapa')
		.get(mapa.getCasillas);

	app.route('/mapa/:id_casilla')
		.get(mapa.getCasilla)
};
