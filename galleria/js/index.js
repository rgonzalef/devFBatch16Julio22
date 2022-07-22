"use strict"

const d = document

const galleryContainer = d.getElementById("gallery-container")
const url = "https://picsum.photos/v2/list?limit=5&page=8"

//Crea las tarjetas y las añade al contenedor
const printGallery = (url) => {
  const div = d.createElement("div")  
  div.classList.add("grid-item")
  div.style.backgroundImage = `url(${url})`
  galleryContainer.appendChild(div)
}

// Peticion HTTP, obtengo las imagenes y llamo a la funcion que crea las tarjetas
const getImages = async () => {
  const response = await fetch(url)
  const data = await response.json()

  console.log(data);

  data.forEach((element) => {
    printGallery(element.download_url)
  });
}

getImages()