const emailInput = document.getElementById('email');
const senhaInput = document.getElementById('senha');

function Login() {
    if (emailInput.value == 'admin@email.com' && senhaInput.value == 'senha') {
        alert('Login feito com um Admin com sucesso!')
        window.location.href = 'pagina.html'
    }else{
        alert('Algo deu errado')
    }
}