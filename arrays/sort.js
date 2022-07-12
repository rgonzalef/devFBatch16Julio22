"use strict";

const numeros = [1, 5, 3, 2, 4];

// Tambien existe reverse para ordenar valores console.log(numeros.reverse());
console.log(numeros.sort());
console.log(numeros.sort((a, b) => b - a));

const arregloNumeros = [{ id: 1 }, { id: 4 }, { id: 5 }, { id: 2 }, { id: 3 }];

console.log(arregloNumeros.sort((a, b) => a.id - b.id));
console.log(arregloNumeros.sort((a, b) => b.id - a.id));
