const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.json());

app.get('', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/escala', (req, res) => {
    res.sendFile(__dirname + '/public/escala.html');
});

app.get('/louvor', (req, res) => {
    res.sendFile(__dirname + '/public/louvor.html');
});


app.listen(port, () => {
    console.log(`Servidor está rodando em http://localhost:${port}`);
});