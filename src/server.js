
// Imports
require('dotenv').config();
const app = require('./app');

// PORT from environment
const PORT = process.env.PORT || 3000;

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});