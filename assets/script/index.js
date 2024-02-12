const button = document.getElementById('buttonProceed');
const checkbox = document.getElementById('checkbox');


button.addEventListener('click', buttonClick);

function buttonClick() { 
    if (checkbox.checked) {
        window.location.href = "./HTMLs/questions.html"
    }
}


checkbox.addEventListener('click', function () {

    if (checkbox.checked) {
        console.log('true');
        button.disabled = false;
        button.classList.add('enabled');
        button.classList.remove('disabled');
    } else {
        console.log('false');
        button.disabled = true;
        button.classList.remove('enabled');
        button.classList.add('disabled');
    }
}
)


