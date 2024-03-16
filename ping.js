const input = document.querySelector('input')
const button = document.querySelector('#button')
const error = document.querySelector('#err')
const success = document.querySelector('#success')
const inn = document.querySelector('#inn')
const mailformat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;

function call() {
    if (input.value.match(mailformat)) {
        success.classList.remove('hide')
        inn.classList.remove('inn')
        inn.classList.add('hide')
    }
    else {
        error.classList.remove('hide')
        input.classList.add('inred')
    }
}

button.addEventListener('click', call)