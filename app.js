const express = require('express');
const morgan = require('morgan');

const timestampRoutes = require('./routes/timestampRoutes');
const logRoutes = require('./routes/logRoutes');

const app = express();

if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));
app.use(express.json());

app.use('/timestamp', timestampRoutes);
app.use('/logs', logRoutes);

module.exports = app;
