const taskList = document.getElementById('task-list');
const newTaskInput = document.getElementById('new-task');

function addTask() {
    const taskText = newTaskInput.value.trim();
    if (taskText !== '') {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <button onclick="completeTask(this)">Complete</button>
            <button onclick="deleteTask(this)">Delete</button>
        `;
        taskList.appendChild(taskItem);
        newTaskInput.value = '';
    }
}

function completeTask(button) {
    const taskItem = button.parentNode;
    taskItem.classList.toggle('completed');
}

function deleteTask(button) {
    const taskItem = button.parentNode;
    taskList.removeChild(taskItem);
}

function clearCompleted() {
    const completedTasks = document.querySelectorAll('.completed');
    completedTasks.forEach(task => taskList.removeChild(task));
}