"use strict"

// Ejemplo de async await, con function
async function getData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await response.json()
      return data
    } catch (error) {
      console.error("Este es mi error: ", error);
    }
  }
  
async function showData() {
  const data = await getData()
  return console.log(data)
}

showData()


// Ejemplo con .then, .catch y de funcion async de tipo flecha
// const getData = () => {
//   return fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(data => data)
//     .catch(error => console.error(error))
// }
  
// flecha/arrow function
// const showData = async () => {
//   const data = await getData()
//   return console.log(data)
// }
