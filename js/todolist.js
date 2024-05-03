const li = document.getElementsByClassName("task");
const suppr = document.getElementsByClassName("suppr");
const supprtout = document.getElementById("supprtout");
const form = document.querySelector("form");
const list = document.getElementById("list");
const selectAll = document.getElementById("all");


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
});

supprtout.addEventListener('click', function () {
    
while (li.length > 0){
    li[0].remove();
}
});

selectAll.addEventListener('click', function() {
    for(i=0; i<li.length; i++) {
         const label = li[i].querySelector('label');
        label.style.textDecoration = "line-through";
        const checkboxes = li[i].querySelectorAll('input[name="task"]');
         checkboxes.forEach(function(checkbox){
            checkbox.checked = true;           
         });
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







