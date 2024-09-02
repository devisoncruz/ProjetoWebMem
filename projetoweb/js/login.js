const input = document.querySelector('.login_input');
const button = document.querySelector('.login_button');
const form = document.querySelector('.login_form');

// script para validar o botão
const validateInput = ({target}) => {
    if (target.value.length > 3) {
        button.removeAttribute('disabled');
        return;
    }

    button.setAttribute('disabled', '');
}

// carregar a pagina do jogo
const handleSubmit = (event) => {
    event.preventDefault();

    localStorage.setItem('player', input.value);
    window.location = 'index.html';
}

input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);