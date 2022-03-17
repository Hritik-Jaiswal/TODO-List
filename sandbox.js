const todoMainContainer = document.querySelector('.todo-input-form');
const todoList = document.querySelector('.todo-list');
const searchInput = document.querySelector('.search-input');

// To generate a template

const ListTemplate = ToDoAdd => {

    // Create div container

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo-items');
    const addTask = document.createElement('li');
    addTask.classList.add('task');
    addTask.textContent = `${ToDoAdd}`;
    todoDiv.appendChild(addTask);

    // Create check button

    const checkBtn = document.createElement('button');
    checkBtn.classList.add('finish-btn');
    checkBtn.innerHTML = '<i class="bi bi-check2"></i>';
    todoDiv.appendChild(checkBtn);

    // Create a delete button

    const deleteToDo = document.createElement('button');
    deleteToDo.classList.add('delete-btn');
    deleteToDo.innerHTML= '<i class="bi bi-trash-fill"></i>'
    todoDiv.appendChild(deleteToDo);
    
    todoList.appendChild(todoDiv);
}

// To add a new task

todoMainContainer.addEventListener('submit', e => {
    e.preventDefault();
    
    const ToDoAdd = document.querySelector('.todo-input').value.trim();
    
    if(ToDoAdd.length){
        ListTemplate(ToDoAdd);
        todoMainContainer.reset();
    }
});

// To mark or delete a todo

todoList.addEventListener('click', e => {

    // To mark

    if(e.target.classList.contains('finish-btn')) return e.target.parentElement.classList.toggle('done');

    // To delete

    if(e.target.classList.contains('delete-btn')){
        e.target.parentElement.classList.add('fall');
        e.target.parentElement.addEventListener('transitionend', () => e.target.parentElement.remove())
    }

})

// TO search or filter List

const searchTODO = term => {

    Array.from(todoList.children)
     .filter( task => !task.textContent.toLowerCase().includes(term))
     .forEach(task => task.classList.add('filterThis'))

    Array.from(todoList.children)
     .filter( task => task.textContent.toLowerCase().includes(term))
     .forEach(task => task.classList.remove('filterThis'))
}

searchInput.addEventListener('keyup', () => {

    const term = searchInput.value.trim().toLowerCase();
    searchTODO(term)
})

// To Cancel Submit event default action

const searchMainContainer = document.querySelector('.search');

searchMainContainer.addEventListener('submit', e => e.preventDefault());