const $ = function (id) {
    return document.getElementById(id);
};

const addToTaskList = function () {
    let taskTextbox = $('task');
    let newTask = new Task(taskTextbox.value);
    if (newTask.isValid()) {
        tasklist.add(newTask);
        tasklist.save();
        tasklist.display();
        taskTextbox.value = '';
    } else {
        alert('Please enter a task.');
    }
    taskTextbox.focus();
};

const clearTaskList = function () {
    tasklist.clear();
    $('task').focus();
};

const deleteFromTaskList = function () {
    tasklist.deletetask(this.title); // 'this' = clicked link
    tasklist.save();
    tasklist.display();
    $('task').focus();
};

window.addEventListener('load', () => {
    $('add_task').onclick = addToTaskList;
    $('clear_tasks').onclick = clearTaskList;
    
    tasklist.displayDiv = $('tasks');
    tasklist.deleteClickHandler = deleteFromTaskList;
    
    tasklist.load();
    tasklist.display();
    
    $('task').focus();
});