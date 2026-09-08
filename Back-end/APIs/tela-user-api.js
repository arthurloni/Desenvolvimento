const express = require("express");
const cors = require("cors");
const app = express(); 
const port = 3000; 

app.use(cors());
app.use(express.json()); 

let registerUser = [ 
    {id: 1,                              
    name: "admin",                 
    email: "administrador@gmail.com",  
    password:"admin"}                     
];

app.get('/api/users', (req,res) => {
    res.json(registerUser)
}) 

// Endpoint criado para realizar o LOGIN utilizando Usuario x Senha ja existente.
app.post('/api/login', (req, res) => {
    const { name, password } = req.body;

    if (!name || !password) {
        return res.status(400).json({ mensagem: 'Usuario e senha são obrigatórios.' });
    }

    const usuarioEncontrado = registerUser.find(
        (user) => user.name === name && user.password === password
    );

    if (!usuarioEncontrado) {
        return res.status(401).json({ mensagem: 'Usuario ou senha inválidos.' });
    }

    const { password: _, ...usuarioSemSenha } = usuarioEncontrado;
    res.status(200).json(usuarioSemSenha);
});

// Endpoint criado para realizar o cadastro de um usuario não existente.
app.post('/api/create', (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ error: "Todos os campos são obrigatórios." });
    }

    let novoUsuario = [{
        id: registerUser.length + 1,
        name: name,
        email: email,
        password: password
    }]
    
    registerUser.push(novoUsuario);
    res.status(201).json({
        mensagem: "Usuario cadastrado com sucesso.",
        user: novoUsuario
    })
}) 

// Inicializando servidor na porta configurada
app.listen(port, () => {
    console.log(`Server run in http://localhost:${port}`)
});