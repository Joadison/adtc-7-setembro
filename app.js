const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const indexRoutes = require('./routes/index');
const generateImageRoutes = require('./routes/generateImageA');
const generateImageARoutes = require('./routes/generateImageA');
const { initializeBot } = require('./services/telegramBot');

app.use(express.static('public'));
app.use(bodyParser.json());

app.use('/', indexRoutes);
app.use('/', generateImageRoutes);
app.use('/', generateImageARoutes);

app.listen(port, () => {
    console.log(`Servidor está rodando em http://localhost:${port}`);
    initializeBot();
});
