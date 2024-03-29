const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const li = document.getElementsByClassName("task");
const suppr = document.getElementsByClassName("suppr");

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

for (let i = 0; i < suppr.length; i++) {
    suppr[i].addEventListener('click', function (event) {
        const btnSuppr = event.target;

        btnSuppr.parentNode.remove();
    }
    );
}



