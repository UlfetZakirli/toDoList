let wrapper = document.querySelector('#wrapper')
let todoInput = document.querySelector('#todo-input')
let addButton = document.querySelector('#add-button')
let todoList = document.querySelector('#todo-list')

let deleteButton = document.createElement('button')
let cancelButton = document.createElement('button')
let editButton = document.createElement('button')

let h2 = document.createElement('h2')
let li = document.createElement('li')

document.getElementById('add-button').addEventListener('click', () => {
    // h2.innerText = "Practice for frontend interviews"

    deleteButton.classList.add('delete-button')
    editButton.classList = "edit-button"
    cancelButton.classList = "cancel-button"
    deleteButton.innerText = "X"


    todoList.appendChild(li)
    li.appendChild(h2)
    li.appendChild(editButton)
    li.appendChild(deleteButton)
    editButton.innerText = "Edit"

    h2.innerText = todoInput.value
    todoInput.value = ""
    deleteButton.addEventListener('click', () => {
        h2.parentElement.remove()
    })
})

// addButton.setAttribute('disabled',"")

// function showAdd(e){
//     e.target.value? addButton.removeAttribute('disabled'):addButton.setAttribute('disabled',"")
// }

editButton.addEventListener('click', () => {

    todoInput.value = h2.innerText
    li.appendChild(cancelButton)
    cancelButton.innerText = "Cancel"
})

cancelButton.addEventListener('click', () => {
    todoInput.value = ""
    cancelButton.remove()

})