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

// Inicializando servidor na porta configurada
app.listen(port, () => {
    console.log(`Server run in http://localhost:${port}`)
});