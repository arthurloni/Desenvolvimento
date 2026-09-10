async function CadastroUser() {
    const nameid = document.getElementById('User').value // continua pegando do mesmo input
    const emailid = document.getElementById('email').value
    const passwordId = document.getElementById('password').value
    const url = 'http://localhost:3000/api/create'

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: nameid,
                email: emailid,
                password: passwordId
            })
        })

        const usuario = await response.json()
        console.log("Cadastro realizado:", usuario)
        
        // Guarda o usuário logado (mesmo sem token, pra lembrar quem está logado)
        localStorage.setItem('usuarioLogado', JSON.stringify(usuario.user))
        
        // Personalizado mensagem temporaria
        const elemento = document.getElementById('Mensagem-site')
        if (elemento) {
            document.getElementById('User').value = "" // "Atualizando" campos
            document.getElementById('email').value = ""
            document.getElementById('password').value = ""
            elemento.textContent = "Cadastro realizado com sucesso."
            elemento.style.color = "#191970"
            elemento.style.textAlign = "center"
            elemento.style.marginTop = "10px"
            elemento.style.fontSize = "18px"
        }

    } catch (error) {
        console.error('Erro na requisição:', error)
        alert("Erro ao conectar com o servidor. Tente novamente.")
    }
}

document.querySelector('.BotaoCadastrar').addEventListener('click', function(event) {
    event.preventDefault()
    CadastroUser()
})