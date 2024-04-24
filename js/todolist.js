const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const li = document.getElementsByClassName("task");
const suppr = document.getElementsByClassName("suppr");
const form = document.querySelector("form");
const list = document.getElementById("list");

checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener('change', handleCheckboxChange);
});

function handleCheckboxChange(event) {
    const checkbox = event.target;
    const label = checkbox.nextElementSibling;

    if (checkbox.checked) {
        label.style.textDecoration = "line-through";
    } else {
        label.style.textDecoration = "none";
    }
}

form.addEventListener('submit', function (event) {
    event.preventDefault();
    let newtask = document.getElementById("tasktoadd").value;
    let toadd = document.createElement('li');
    toadd.className = "task";
    toadd.innerHTML = '<input type="checkbox"><label for="task">' + newtask + '</label><input type="button" value="suppr" class="suppr">';
    list.appendChild(toadd);
    
}
)


for (let i = 0; i < suppr.length; i++) {
    suppr[i].addEventListener('click', function (event) {
        const btnSuppr = event.target;
        btnSuppr.parentNode.remove();
    }
    );
}





