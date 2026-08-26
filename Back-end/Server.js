const express = require('express'); // require -> Forma de importar libs do Node
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const raizProjeto = path.join(__dirname, '..');

app.use(express.static(raizProjeto));

app.get('/', (req, res) => {
    res.sendFile(path.join(raizProjeto, 'Front-end', 'HTML', 'Login', 'TelaLogin.html'));
});

app.get('/cadastro', (req, res) => {
    res.sendFile(path.join(raizProjeto, 'Front-end', 'HTML', 'Cadastro', 'TelaCadastro.html'));
});

app.get('/esqueci-senha', (req, res) => {
    res.sendFile(path.join(raizProjeto, 'Front-end', 'HTML', 'EsqueciSenha', 'EsqueciSenha.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});