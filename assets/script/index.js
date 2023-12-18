const buttonClick = function () {
    window.location.href = "./HTMLs/questions.html";
};

button = document.getElementById('buttonProceed');

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
});

