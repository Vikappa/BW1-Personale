const buttonClick = function () {
  window.location.href = '../questions.html';
};
button = document.getElementById('buttonProceed');
button.addEventListener('click', buttonClick);

// const miaCheckbox = document.getElementById('checkbox');
// const button = document.getElementById('button');

checkbox.addEventListener('click', function () {
  if (checkbox.checked) {
    console.log('true');

    button.disabled = false;
  } else {
    button.disabled = true;

    console.log('false');
  }
});
