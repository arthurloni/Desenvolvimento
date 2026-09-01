const express = require("express")
const app = express()
const port = 3000

function tempo(req, res) {
    const agora = new Date();

    res.json({
        data: agora.toLocaleDateString('pt-BR'),
        hora: agora.getHours(),
        minuto: agora.getMinutes(),
        segundo: agora.getSeconds()
    });
}

app.get('/api/tempo', tempo);

app.listen(port, () => {
    console.log(`Server run in http://localhost:${port}`)
});