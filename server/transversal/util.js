'use strict';

// funcion que actualiza un valor de nivel 1 al correspondiente en el valor indicado
exports.actualizaValor = function actualizaValor (valor, nivel){
  var valorActualizado;
  if (nivel < 2){
    valorActualizado = valor;
  }
  else {
    valorActualizado = actualizaValor(valor,nivel-1) + actualizaValor(valor,nivel-2);
  }
  return valorActualizado;
}








