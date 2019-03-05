const express = require('express');

const app = express();

app.disable('x-powered-by');

app.use(express.static('public', {}));

module.exports = app;