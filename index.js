const list = document.querySelector('#section')
console.log(list)

const animalListElm = document.querySelector('#section');

fetch("http://clu-myapi.herokuapp.com/api/v1/animals", {
  "method": "GET",
  "headers": {
    "Authorization": "Bearer eifjkw9039t9fkwek2w0fo0b0uyoyttrkeswiodc9sdiwqw22984398fjdsjwwidorei39odk"
  }
})
  .then(response => response.json())

  .then(data =>
    data.result.forEach(animal => {
      let item = document.createElement("li")
      item.innerHTML = `
      <p>${animal.name}</p><p>${animal._id}</p><a href="./details.html"></a><p>${animal.type}</p><p>${animal.breed}</p><p>${animal.age} Years old</p><p>${animal.sex}</p><p>${animal.colors}</p>`
      list.append(item)

      let li = document.createElement('li')

      li.innerHTML = `
      <a href="details.html?animalid=${animal._id}">detaljer</a>
      `
      animalListElm.append(li)

    }));
   
   

