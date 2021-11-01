const addTaskButton = document.getElementById('add-task-btn');
const taskInput = document.getElementById('input-task');
const taskList = document.getElementById('tasks');
const input = document.getElementById('input-task');
const error = document.getElementById('error');
const done = document.getElementById('done-tasks');

const events = function () {
    if (input.value === '') {
        error.style.display = 'block';
    }
    else {
        const newLi = document.createElement('LI');
        const check = document.createElement('INPUT');
        check.setAttribute("type", "checkbox");
        check.id = 'id1';
        const label = document.createElement('LABEL');
        label.innerText = input.value;
        label.htmlFor = 'id1';
        newLi.appendChild(check);
        newLi.appendChild(label);
        taskList.appendChild(newLi);
        newLi.classList.add('task');
        error.style.display = 'none';

        check.addEventListener('change', function () {
            if (this.checked) {
                newLi.classList.add('completed');
                done.appendChild(newLi);
            }
            else {
                newLi.classList.remove('completed');
                taskList.appendChild(newLi);
            }
        });
    }
};

const enter = function (e) {
    if (e.key === 'Enter') {
        events();
    }
};

addTaskButton.addEventListener('click', events);
taskInput.addEventListener('keypress', enter);