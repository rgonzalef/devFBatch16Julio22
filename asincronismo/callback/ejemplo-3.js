function hola(nombre, callback) {
  setTimeout(() => {
    return callback(nombre)
  }, 1500);
}

hola("Samantha", (nombre) => {
  return console.log(`Hola, ${nombre}`)
})


//Desafìo. Crea una funcion y pasasela como parametro a hola, cuando la ejecutes
function saludar(nombre) {
  return console.log(`Hola, ${nombre}`)
}

hola("Floresita", saludar)