const input = document.querySelector('.login_input');
const button = document.querySelector('.login_button');
const form = document.querySelector('.login-form');

// script para validar o botão
const validateInput = ({target}) => {
    if (target.value.length > 3) {
        button.removeAttribute('disabled');
        return;
    }
}

const handleSubmit = (event) => {
    event.preventDefault();

    localStorage.setItem("player", input.value);
}

function logar() {

    location.href = "index.html";
}

input.addEventListener('input', validateInput);
form.addEventListener('subimit', handleSubmit);