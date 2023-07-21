let toDoInput = document.querySelector("#toDoText");
let addButton = document.querySelector("#add");
let toDoList = document.querySelector("#toDoList");

// Listen for click event on our add button and run callback function
addButton.addEventListener('click', function() {
  // Stores the text currently inside of our input field
  let toDoText = toDoInput.value;

  // Clear out the input field for another to do list item
  toDoInput.value = ""

  let newTodo = document.createElement('li');
  newTodo.innerText = toDoText


  newTodo.addEventListener('click', function(e) {

    newTodo.classList.toggle('crossed-off')

    setTimeout(() => {
      this.remove()
    }, 1000)
  })

  toDoList.appendChild(newTodo)














})