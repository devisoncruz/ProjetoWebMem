const input = document.querySelector('.login_input');
const button = document.querySelector('.login_button');

// script para validar o botão
const validateInput = ({target}) => {
    if (target.value.length > 3) {
        button.removeAttribute('disabled');
        return;
    }
}



function logar() {

    location.href = "index.html";

}

input.addEventListener('input', validateInput);