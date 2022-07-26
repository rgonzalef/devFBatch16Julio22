"use strict"

const { v4: uuidv4 } = require('uuid')

const d = document

const input_todo = d.getElementById('input-todo')
const btn_add = d.getElementById('btn-add')
const content_w = d.getElementById('content-wrapper')

const url = 'http://localhost:3000/data'

const printTasks = (task, id) => {
  let li = d.createElement('li')
  li.dataset.id = id
  li.textContent = task

  const btn_1 = d.createElement('button')
  const btn_2 = d.createElement('button')
  btn_1.textContent = 'Editar'
  btn_2.textContent = 'Eliminar'

  btn_1.addEventListener('click', () => {
    putData(id, input_todo.value)
  })

  btn_2.addEventListener('click', () => {
    deleteData(id)
  })

  li.appendChild(btn_1)
  li.appendChild(btn_2)

  content_w.appendChild(li)
}
const getData = () => {
  fetch(url)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      data.forEach(element => {
        printTasks(element.task, element.id)
      });
    })
    .catch((error) => {
      console.error(error)
    })
}
const postData = (task) => {
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "id": uuidv4(),
      "task": task
    })
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))
}
const putData = (id, task) => {
  fetch(url + '/' + id, {
    method: 'PUT',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "task": task
    })
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))

}
const deleteData = (id) => {
  fetch(url + '/' + id, {
    method: 'DELETE',
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(() => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))
}

getData()

btn_add.addEventListener('click', () => {
  postData(input_todo.value)
})

//Mejorar la aplicaciòn (¿Què sigue?):
// - Interfaz gràfica
// - Cambiar then, por async await
// - crear una api con express
// - hacer el codigo en menos lineas