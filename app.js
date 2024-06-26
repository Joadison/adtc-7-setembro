const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


const generateImageRoutes = require('./routes/generateImage');
const generateImageARoutes = require('./routes/generateImageA');
const { initializeBot } = require('./services/telegramBot');

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

app.use('/', generateImageRoutes);
app.use('/', generateImageARoutes);

app.listen(port, () => {
    console.log(`Servidor está rodando em http://localhost:${port}`);
    initializeBot();
});