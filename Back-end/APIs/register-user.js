const express = require("express"); // Lib focada em criação de APIs de forma pratica e rapida
const app = express(); // Recebendo o objeto dentro de uma var constante 
const port = 3000; // Declarando uma porta fixa para ser utilizada na WEB

app.use(express.json()); // Middleware para fazer o express entender o formato JSON

let registerUser = [ // Criando um banco utilizando Array de objetos
    {id: 1,                              
    name: "admin",                 
    email: "administrador@gmail.com",  
    password:"admin"}                     
];

// 1 - Primeiro Method (Recebendo os usuarios | GET)
app.get('/api/user',(req,res) => {
    const registerNotPassword = registerUser.map(({ password, ...rest }) => rest); // Retirando senha dentro do array
    // res.json(registerNotPassword[0].id)
    // res.json(registerNotPassword[0].name)
    // res.json(registerNotPassword[0].email)
    res.json(registerNotPassword)
});

//2 - Segundo Method (Criando usuarios) | POST
app.post('/api/create', (req, res) => {
    const { name, email, password } = req.body; // Destruturando o body, senao seria usado dessa forma
    // ex: const name = req.body.name;

    // Valida se os campos obrigatorios vieram
    if (!name || !email || !password) { // Operadores logicos, !=Not,||=Or
        return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios.' }); //add mensagem de erro com codigo http
    }

    const novoUsuario = { id: registerUser.length + 1, name, email, password }; // Tipo registerUser, utilizando length para ler numero de elementros
    registerUser.push(novoUsuario); // Forma de adicionar no ultimo elemento

    res.status(201).json(novoUsuario);
    console.log("User criado com sucesso.")
});

// Inicializando servidor na porta configurada
app.listen(port, () => {
    console.log(`Server run in http://localhost:${port}`)
});