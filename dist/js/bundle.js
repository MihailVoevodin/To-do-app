/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/


const btn = document.querySelector('.btn');
const todoList = document.querySelector('.list');
const input = document.querySelector('.input');    


btn.addEventListener('click', (e) => {
    e.preventDefault()
    if (input.value === '') {
        alert('Add to-do');
    } else {
        createTodo();  
    }
    
    doneTodo()
    deleteTodo()
    localStorage.setItem('todos', todoList.innerHTML)
})


function createTodo() {


    const todo = document.createElement('li');
    todo.classList.add('todo');
    todo.innerHTML = `
        ${input.value}
        <button class="done">✔️</button>
        <button class="delete">❌</button>
    `
    
    input.value = '';
    

    todoList.appendChild(todo)
}

function doneTodo() {
    const doneBtns = document.querySelectorAll('.done');

    doneBtns.forEach(item => {
        
        item.addEventListener('click', (e) => {
            
            e.target.parentNode.style.textDecorationLine = 'line-through';
            
            localStorage.setItem('todos', todoList.innerHTML)
        })
        
    })
}

function deleteTodo() {
    const deleteBtns = document.querySelectorAll('.delete');

    deleteBtns.forEach(item => {
        item.addEventListener('click', (e) => {
            
            e.target.parentNode.remove();
            
            localStorage.removeItem('todos', todoList.innerHTML)
            localStorage.setItem('todos', todoList.innerHTML) 
        })
    })
}





function loadTodo() {
    const todos = localStorage.getItem('todos');
    if (todos) {
        todoList.innerHTML = todos;
    }
    
    doneTodo()
    deleteTodo()
}

loadTodo();





/******/ })()
;
//# sourceMappingURL=bundle.js.map