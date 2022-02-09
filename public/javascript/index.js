const charactersAPI = new APIHandler();

//GET ALL
window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {

    charactersAPI
      .getFullList()
      .then(fullList => {
        let text = ""
        fullList.data.forEach(eachCharacter => text += ` 
        <div class="character-info">
        <div class="name">${eachCharacter.name}</div>
        <div class="occupation">${eachCharacter.occupation}</div>
        <div class="cartoon">${eachCharacter.cartoon}</div>
        <div class="weapon">${eachCharacter.weapon}</div>
      </div>`)
        document.querySelector(".characters-container").innerHTML = text
      })
      .catch(err => console.log(err))

  });


  //GET ONE
  document.getElementById('fetch-one').addEventListener('click', function (event) {
    const personId = document.querySelector(".searchId").value

    charactersAPI
      .getOneRegister(personId)
      .then(person => {
        let text = ""
        text += ` 
        <div class="character-info">
        <div class="name">${person.data.name}</div>
        <div class="occupation">${person.data.occupation}</div>
        <div class="cartoon">${person.data.cartoon}</div>
        <div class="weapon">${person.data.weapon}</div>
      </div>`
    document.querySelector(".characters-container").innerHTML = text
  })
    .catch(err => console.log(err))

});


// DELETE ONE
document.getElementById('delete-one').addEventListener('click', function (event) {
  const personId = document.querySelector(".deleteId").value

  charactersAPI
    .deleteOneRegister(personId)
    .then(person => window.alert(`Has borrdo a ${person.data.name}`))
    .catch(err => console.log(err))
});


//EDIT ONE
document.getElementById('edit-character-form').addEventListener('submit', function (event) {
  event.preventDefault()

  const inputUpdated = document.querySelectorAll("#edit-character-form input")

  const id = inputUpdated[0].value

  const uptadedData = {
    name: inputUpdated[1].value,
    occupation: inputUpdated[2].value,
    weapon: inputUpdated[3].value,
    cartoon: inputUpdated[4].checked
  }

  charactersAPI
    .updateOneRegister(id, uptadedData)
    .then(updated => {
      console.log(updated)
    if (updated.data !== null){
      document.querySelector("#send-upadte").classList.add("green")
    } 

   })
    .catch(err => {
      document.querySelector("#send-upadte").classList.add("red")
      console.log(err)
    })
});


//CREATE ONE
document.getElementById('new-character-form').addEventListener('submit', function (event) {
  event.preventDefault()

  const inputNew = document.querySelectorAll("#new-character-form input")

  const newInputData = {
    name: inputNew[0].value,
    occupation: inputNew[1].value,
    weapon: inputNew[2].value,
    cartoon: inputNew[3].checked
  }

  charactersAPI
    .createOneRegister(newInputData)
    .then(created => {
      console.log(created)
      if (created.data.name && created.data.occupation && created.data.weapon){
        document.querySelector("#send-create").classList.add("green")
      } else {document.querySelector("#send-create").classList.add("red")}
    })
    .catch(err => {
      console.log(err)
     
    })
})


})

