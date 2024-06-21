const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`Servidor está rodando em http://localhost:${port}`);
});