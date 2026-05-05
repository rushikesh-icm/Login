// Imports
const express = require('express');

// Router
const router = express.Router();

// Health check controller
const { healthCheck } = require('../controllers/health.controller');

// Health check route
router.get('/', healthCheck);

module.exports = router;