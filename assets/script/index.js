const button = document.getElementById('buttonProceed')
const checkbox = document.getElementById('checkbox')
const inputName = document.getElementById('inputNome')
const fileInput = document.getElementById('imageInput')
const saveButton = document.getElementById('saveButton')

button.addEventListener('click', buttonClick)

function buttonClick() { 
    if (checkbox.checked && inputName.value.length) {
        sessionStorage.setItem("nomePartecipante", JSON.stringify(inputNome.value))
        window.location.href = "./HTMLs/questions.html"
    }
}

function updateButtonState() {
    if (checkbox.checked && inputName.value.length) {
        button.disabled = false
        button.classList.add('enabled')
        button.classList.remove('disabled')
    } else {
        button.disabled = true
        button.classList.remove('enabled')
        button.classList.add('disabled')
    }
}

checkbox.addEventListener('click', updateButtonState)
inputName.addEventListener('input', updateButtonState)

document.getElementById('imageInput').addEventListener('change', function() {

    if (fileInput.files && fileInput.files[0]) {
        saveButton.style.display = 'block';
    } else {
        saveButton.style.display = 'none';
    }
})



function saveImageToSessionStorage() {
    if (fileInput.files && fileInput.files[0]) {
        var reader = new FileReader();
        
        reader.onload = function(e) {
            var img = new Image();
            
            img.onload = function() {
                var canvas = document.createElement('canvas')
                var ctx = canvas.getContext('2d')
                canvas.width = 120
                canvas.height = 120
                ctx.drawImage(img, 0, 0, 120, 120)
                
                var resizedImage = canvas.toDataURL('image/png')
                sessionStorage.setItem('profilePic', resizedImage)
                alert('Immagine salvata!')
            }
            
            img.src = e.target.result
        }
        
        reader.readAsDataURL(fileInput.files[0])
    } else {
        alert('Per favore, seleziona un file prima di provare a salvarlo.')
    }
}

saveButton.addEventListener("click", function () {
    saveImageToSessionStorage()
})