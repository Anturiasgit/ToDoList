const form = document.querySelector("form");
const tasks = document.getElementsByClassName("task");
const supprtout = document.querySelector('input[value="suppr. tout"]');
const todolist = document.getElementById("todolist");
const selectAll = document.querySelector('input[type="checkbox"]');




form.addEventListener('submit', function (event) {

                                    /* Ajout d'une nouvelle tâche */

    event.preventDefault(); 
    const taskName = document.querySelector('input[name="new"]').value;
    let newTask = document.createElement('li'); 
    newTask.className = "task";
    newTask.innerHTML = '<input type="checkbox" name="task_checkbox"><label for="task_checkbox">' + taskName + '</label><input type="button" value="suppr">';
    todolist.appendChild(newTask);

                                    /* Gestion du click sur une checkbox */

    const taskCheckboxes = document.querySelectorAll('input[name="task_checkbox"]');
    taskCheckboxes.forEach(function (taskCheckbox) {
        taskCheckbox.addEventListener('change', handleCheckboxChange);
    });

                                    /* Gestion du click sur un bouton de suppression */

    for (let i = 0; i < tasks.length; i++) {
        const btnSuppr = tasks[i].querySelector('input[value="suppr"]');
        btnSuppr.addEventListener('click', deleteTask);
    }


    document.querySelector('input[type="text"]').value = ""; // Réinitialisation de la zone de texte lorsqu'une tâche est soumise
});

                        /* Fonctions qui barrent les tâches cochées */

function handleCheckboxChange(event) {
    const taskCheckbox = event.target;
    const taskLabel = taskCheckbox.nextElementSibling;

    if (taskCheckbox.checked) {
        taskLabel.style.textDecoration = "line-through";
    } else {
        taskLabel.style.textDecoration = "none";
    }
}


selectAll.addEventListener('change', function (event){
    const selectAllCheckbox = event.target;
    
    if (selectAllCheckbox.checked) {
        for (i = 0; i < tasks.length; i++) {
            const label = tasks[i].querySelector('label');
            label.style.textDecoration = "line-through";
            const checkboxes = tasks[i].querySelectorAll('input[type="checkbox"]');
            checkboxes.forEach(function (checkbox) {
                checkbox.checked = true;
            });
        }
    } else {
        for (i = 0; i < tasks.length; i++) {
            const label = tasks[i].querySelector('label');
            label.style.textDecoration = "none";
            const checkboxes = tasks[i].querySelectorAll('input[type="checkbox"]');
            checkboxes.forEach(function (checkbox) {
                checkbox.checked = false;
            });
        }
    }
});

                        /* Fonctions qui suppriment les tâches */

function deleteTask(event) {
    const btnSuppr = event.target;
    btnSuppr.parentNode.remove();
}



supprtout.addEventListener('click', function () {
    while (tasks.length > 0) {
        tasks[0].remove();
    }
});









