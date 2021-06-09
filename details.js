document.addEventListener("DOMContentLoaded", function() {

    let singleElm = document.querySelector('.single');

    if (singleElm) {

        let url = new URLSearchParams(window.location.search)
        let animalid = url.get("animalid")

        console.log(animalid)

        fetch(`http://clu-myapi.herokuapp.com/api/v1/animals/${animalid}`, {
            "method": "GET"
          })
            .then(response => response.json())
            .then(data => {
            console.log(data)
            let div = document.createElement("div")

            div.innerHTML = `
            <h2>${data.name}</h2>
            <p>age: ${data.age}</p>
            <p>type: ${data.type}</p>
            <p>breed: ${data.breed}</p>
            <p>sex:${data.sex}</p>
            <p>colors:${data.colors}</p>
            
            <h3>Colors</h3>
            <ul>
            `
            data.colors.forEach(data => {
                div.innerHTML += `
                <li>${data.colors}</li>
                `
            })

            div.innerHTML += `
            </ul>
            `

            singleElm.appendChild(div)

        })


        
        function deleteAnimal (){

            fetch(`http://clu-myapi.herokuapp.com/api/v1/animals/${animalid}`, {
            "method": "DELETE",
            "headers": {
                "Authorization": "Bearer eifjkw9039t9fkwek2w0fo0b0uyoyttrkeswiodc9sdiwqw22984398fjdsjwwidorei39odk"
            }
            
            })
            .then(response => console.log(response))
            .catch(err => console.error(err));
        }

    document.querySelector('.deleteBtn').addEventListener('click', function() {
        console.log('delete')
        deleteAnimal()
    })

    }

})
