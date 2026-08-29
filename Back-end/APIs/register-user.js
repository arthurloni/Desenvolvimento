const express = require("express"); // Lib focada em criação de APIs de forma pratica e rapida
const app = express(); // Recebendo o objeto dentro de uma var constante 
const port = 3000; // Declarando uma porta fixa para ser utilizada na WEB

app.use(express.json()); // Middleware para fazer o express entender o formato JSON

let registerUser = [ // Criando um banco utilizando Array de objetos
    {id: 1,                              
    name: "Arthur Loni",                 
    email: "aarthurloniaiello@gmail.com",  
    password:"1234"}                     
];

// 1 - Primeira ROTA (Recebendo os usuarios | GET)
app.get('/api/user',(req,res) => {
    const registerNotPassword = registerUser.map(({ password, ...rest }) => rest); // Retirando senha dentro do array
    // res.json(registerNotPassword[0].id)
    // res.json(registerNotPassword[0].name)
    // res.json(registerNotPassword[0].email)
    res.json(registerNotPassword)
});

// Inicializando servidor na porta configurada
app.listen(port, () => {
    console.log(`Server run in http://localhost:${port}`)
});