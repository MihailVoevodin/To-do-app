

const btn = document.querySelector('.add-btn');
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
        <div style="display: flex">
            <button class="btn do">✔️</button>
            <button class="btn delete">❌</button>
        </div>
    `
    
    input.value = '';
    

    todoList.appendChild(todo)
}

function doneTodo() {
    const doneBtns = document.querySelectorAll('.do');

    doneBtns.forEach(item => {
        
        item.addEventListener('click', (e) => {
            
            e.target.parentNode.parentNode.classList.add('done');
            e.target.style.display = 'none';
            
            localStorage.setItem('todos', todoList.innerHTML)
        })
        
    })
}

function deleteTodo() {
    const deleteBtns = document.querySelectorAll('.delete');

    deleteBtns.forEach(item => {
        item.addEventListener('click', (e) => {
            
            e.target.parentNode.parentNode.remove();
            
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




