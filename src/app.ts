// Imports
import express from 'express';
import healthRoutes from './routes/health.routes';

// Create express app
const app = express();

// JSON middleware to parse request body
app.use(express.json());

// Health check route
app.use('/health', healthRoutes);

export default app;