const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__dirname + '/../public/index.html');
});

router.get('/escala', (req, res) => {
    res.sendFile(__dirname + '/../public/escala.html');
});

router.get('/louvor', (req, res) => {
    res.sendFile(__dirname + '/../public/louvor.html');
});

router.get('/create-story', (req, res) => {
    res.sendFile(__dirname + '/../public/create_story.html');
});

module.exports = router;
