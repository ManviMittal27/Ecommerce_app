const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(3003, () => {
    console.log("Server has Started on port 3003...");
});
