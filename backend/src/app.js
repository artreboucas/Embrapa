// src/app.js
const express = require('express');
const cors = require('cors');
const simuladorRoutes = require('./routes/simuladorRoutes'); 

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/simulador', simuladorRoutes); 
module.exports = app;
