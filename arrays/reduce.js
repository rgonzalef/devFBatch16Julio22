"use strict";

const numeros = [1, 2, 3, 4, 5];
let numero1 = 0;
numeros.forEach((dato) => (numero1 += dato));
console.log("numero1 ", numero1);

// Se puede utilizar de dos maneras
// let numero2 = numeros.reduce((a, b) => a + b);
let numero2 = numeros.reduce((a, b) => {
  return a + b;
});
console.log("numero2 ", numero2);

const arregloNumeros = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

let arregloNumero1 = 0;
arregloNumeros.forEach((arregloNumero) => (arregloNumero1 += arregloNumero.id));
console.log("arregloNumero1 ", arregloNumero1);

let arregloNumero2 = arregloNumeros.reduce((a, b) => {
  return a + b.id;
}, 0);
console.log('arregloNumero2 ', arregloNumero2);
