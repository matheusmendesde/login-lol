 let inputs = document.querySelectorAll('.input')
 let button = document.querySelector('.button_login')

let focando = ({ target }) => {
    let span = target.previousElementSibling;
    span.classList.add('span_ativo')
}

let focandoFora = ({ target }) => {
    if (target.value == '') {
    let span = target.previousElementSibling;
    span.classList.remove('span_ativo')
    }
}

let botoes = () => {
    let [username, password] = inputs;

    if(username.value && password.value.length >= 8) {
        button.removeAttribute('disabled');
    } else {
        button.setAttribute('disabled', '')
    }
}

inputs.forEach((input) => input.addEventListener('focus', focando));
inputs.forEach((input) => input.addEventListener('focusout', focandoFora)); 
inputs.forEach((input) => input.addEventListener('input', botoes)); 


