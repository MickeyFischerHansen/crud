
function createAnimal (){

    document.addEventListener('DOMContentLoaded', function() {
        const form = new FormData();
    form.append("type", "Cat");
    form.append("breed", "Hairless");
    form.append("name", "pølse");
    form.append("age", "8");
    form.append("sex", "Female");
    form.append("colors", "[gray]");
    form.append("null", "null");
    
    fetch("http://clu-myapi.herokuapp.com/api/v1/animals", {
      "method": "POST",
      "headers": {
        "Authorization": "Bearer eifjkw9039t9fkwek2w0fo0b0uyoyttrkeswiodc9sdiwqw22984398fjdsjwwidorei39odk"
      },
      "body": form
    })
      .then(response => console.log(response))
      .catch(err => console.error(err));
    })

}

document.querySelector('.create').addEventListener('click', function() {
    console.log('Create')
    createAnimal()
})
