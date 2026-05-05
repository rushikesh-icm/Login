// Imports
import dotenv from 'dotenv';
import app from './app';

// Load environment variables
dotenv.config();

// PORT from environment
const PORT = process.env.PORT || 3000;

// Start Server
const server = app.listen(PORT, () => {
  console.info(`Server running on port ${PORT}`);
});

// Error handler
server.on('error', (err: Error) => {
  console.error('Server failed to start:', err);
  process.exit(1);
});

// Shutdown server on SIGINT
process.on('SIGINT', () => {
  console.info('Shutting down server...');
  server.close(() => {
    process.exit(0);
  });
});