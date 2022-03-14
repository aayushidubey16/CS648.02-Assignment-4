const express = require('express');
const path = require('path');

const app = express();
const PORT = 7500;

app.use(express.static(path.join(__dirname, '/public')));

app.listen(PORT, () => console.log('Listening on PORT', PORT));