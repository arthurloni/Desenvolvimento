// CODIGO DESENVOLVIDO PARA ESTUDOS, SEM PADRÃO DE SEGURANÇA, POR ISSO (USER X PASSWORD) DENTRO DO CODIGO
function RegisterUser() {
    const userName = "admin"
    const password = "1234"

    // Metodo de busca em toda pagina para aquele elemento especifico
    const userId = document.getElementById('User').value // recebe valor digitado pelo user
    const passwordId = document.getElementById('password').value

    // Valida user x password
    if (userId !== userName || passwordId !== password) {
        alert("User and password error, please config or solicit support adm")
    } else {
        alert("Login realizado com sucesso")
    }
}

// Lendo conteudo da class do css, verifica se alguem clicou no botao, função que roda no momento do clique, parametro do navegador
document.querySelector('.BotaoEntrar').addEventListener('click', function(event) {
    event.preventDefault() // cancela o recarregamento da pagina por meu html ter um form, acaba sendo lido como um formulario e normalmente recarerga a pagina
    RegisterUser()         // chama a função, validação antes da chamada feita para so entrar quando tiver clique no botão
})