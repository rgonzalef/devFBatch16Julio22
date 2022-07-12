"use strict"

var datos = ["a", "b", "c", "d", "e"];
// Primer parametro dice donde comenzar a eliminar
// Segundo parametro dice cuantos va a eliminar
let eliminado = datos.splice(2, 2, "z", "x", "y");
// console.log('eliminado ', eliminado, datos);

const frase = "Hola como estas!";
// console.log(frase.replace('Hola', 'olo'));

var palabras = ["Carro", "Casa", "Avion", "bici", "Pasto"];
var valoresEliminados = palabras.splice(1, 2, "Mansion", "Perro", "Jamon", "Ola");

console.log('valoresEliminados ', valoresEliminados);
console.log('palabras ', palabras);
