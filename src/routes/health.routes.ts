// Imports
import express from 'express';
import { healthCheck } from '../controllers/health.controller';

// Create router
const router = express.Router();

// Health check route
router.get('/', healthCheck);

export default router;