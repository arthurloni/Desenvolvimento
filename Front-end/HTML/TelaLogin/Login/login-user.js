async function RegisterUser() {
    const nameid = document.getElementById('User').value // continua pegando do mesmo input
    const passwordId = document.getElementById('password').value
    const url = 'http://localhost:3000/api/login'

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: nameid,
                password: passwordId
            })
        })

        if (!response.ok) {
            alert("Usuario ou senha estão errados, Por favor entre em contato com administrador do sistema.")
            return
        }

        const usuario = await response.json()
        console.log("Login OK:", usuario)

        // Guarda o usuário logado (mesmo sem token, pra lembrar quem está logado)
        localStorage.setItem('usuarioLogado', JSON.stringify(usuario))

        window.location.replace("/Front-end/HTML/TelaLogin/TelaHome/TelaHome.html")
    } catch (error) {
        console.error('Erro na requisição:', error)
        alert("Erro ao conectar com o servidor. Tente novamente.")
    }
}

document.querySelector('.BotaoEntrar').addEventListener('click', function(event) {
    event.preventDefault()
    RegisterUser()
})