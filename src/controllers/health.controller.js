/**
 * Health check controller
 * Purpose: To check if the server is running
 * Returns: JSON response with status, uptime, and timestamp
 * Example:
 * {
 *     "status": "OK",
 *     "uptime": 100,
 *     "timestamp": 1715000000
 * }
 */
exports.healthCheck = async (req, res) => {
    // Log the request
    console.log("Health check route hit successfully");

    // Return JSON response
    res.status(200).json({
        status: "OK",
        uptime: process.uptime(),
        timestamp: Date.now(),
    });
};
