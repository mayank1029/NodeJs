'use strict';

const express = require('express');

// Constants
const PORT = 8080;
//adding just a comment
// App
const app = express();
app.get('/', function (req, res) {
  res.send('Ready for fourth release\n');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
