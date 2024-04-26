const li = document.getElementsByClassName("task");
const suppr = document.getElementsByClassName("suppr");
const supprtout = document.getElementById("supprtout");
const form = document.querySelector("form");
const list = document.getElementById("list");


form.addEventListener('submit', function (event) {
    event.preventDefault();
    let newtask = document.getElementById("tasktoadd").value;
    let toadd = document.createElement('li');
    toadd.className = "task";
    toadd.innerHTML = '<input type="checkbox" name="task"><label for="task">' + newtask + '</label><input type="button" value="suppr" class="suppr">';
    list.appendChild(toadd);
    const tasks = document.querySelectorAll('input[name="task"]');
    tasks.forEach(function (task) {
        task.addEventListener('change', handleCheckboxChange);
    });

    for (let i = 0; i < suppr.length; i++) {
        suppr[i].addEventListener('click', deleteTask); 
    }
}
)

supprtout.addEventListener('click', function () {
for (let i = 0; i < suppr.length; i++) {
    suppr[i].parentNode.remove();
}
});



function handleCheckboxChange(event) {
    const task = event.target;
    const label = task.nextElementSibling;

    if (task.checked) {
        label.style.textDecoration = "line-through";
    } else {
        label.style.textDecoration = "none";
    }
}


function deleteTask (event) {
    const btnSuppr = event.target;
    btnSuppr.parentNode.remove();
}







