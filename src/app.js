// Imports
const express = require('express');
const app = express();

// Middlewares

// JSON middleware to parse request body
app.use(express.json());

// 1. Health check route
app.use('/health', require('./routes/health.routes'));

module.exports = app;