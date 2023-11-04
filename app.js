require('dotenv').config();
const express = require('express');
const routes = require('./src/routes/routes');

const app = express();

app.use('/api/v1', routes);

// Route not found (404)
app.use((req, res) => {
  return res.status(404).send({ code: 'NOT_FOUND_ROUTE', message: `Route ${req.url} Not found.` });
});

module.exports = app;