const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/escala', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'escala.html'));
});

app.get('/louvor', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'louvor.html'));
});

app.get('/create-story', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'create_story.html'));
});

app.use(express.static('public'));
app.use(bodyParser.json());


app.listen(port, () => {
    console.log(`Servidor está rodando em http://localhost:${port}`);
});