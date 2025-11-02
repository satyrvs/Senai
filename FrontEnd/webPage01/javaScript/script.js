
const form = document.getElementById('loginForm');

form.addEventListener('submit', function(event) {

    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username == '' || password == ''){
        alert("Por favor preencha os campos");
    } else {
        alert("Login efetuado com Sucesso!!!");

    }
}

);