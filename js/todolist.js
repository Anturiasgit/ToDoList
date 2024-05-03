const form = document.querySelector("form");
const tasks = document.getElementsByClassName("task");
const supprtout = document.querySelector('input[value="suppr. tout"]');
const todolist = document.getElementById("todolist");
const selectAll = document.querySelector('input[type="checkbox"]');



form.addEventListener('submit', function (event) {
    event.preventDefault();
    const taskName = document.querySelector('input[name="new"]').value;
    let newTask = document.createElement('li');
    newTask.className = "task";
    newTask.innerHTML = '<input type="checkbox" name="task_checkbox"><label for="task_checkbox">' + taskName + '</label><input type="button" value="suppr">';
    todolist.appendChild(newTask);

    const taskCheckboxes = document.querySelectorAll('input[name="task_checkbox"]');
    taskCheckboxes.forEach(function (taskCheckbox) {
        taskCheckbox.addEventListener('change', handleCheckboxChange);
    });
    
    for (let i = 0; i < tasks.length; i++) {
        const btnSuppr = tasks[i].querySelector('input[value="suppr"]');
        btnSuppr.addEventListener('click', deleteTask); 
    }


    document.querySelector('input[type="text"]').value = "";
});




supprtout.addEventListener('click', function () {
    while (tasks.length > 0){
    tasks[0].remove();
}
});



selectAll.addEventListener('click', function() {
    for(i = 0; i < tasks.length; i++) {
         const label = tasks[i].querySelector('label');
        label.style.textDecoration = "line-through";
        const checkboxes = tasks[i].querySelectorAll('input[type="checkbox"]');
         checkboxes.forEach(function(checkbox){
            checkbox.checked = true;           
         });
    }

});



function handleCheckboxChange(event) {
    const taskCheckbox = event.target;
    const taskLabel = taskCheckbox.nextElementSibling;

    if (taskCheckbox.checked) {
        taskLabel.style.textDecoration = "line-through";
    } else {
        taskLabel.style.textDecoration = "none";
    }
}


function deleteTask (event) {
    const btnSuppr = event.target;
    btnSuppr.parentNode.remove();
}







