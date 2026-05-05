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
import { Request, Response, RequestHandler } from 'express';

export const healthCheck: RequestHandler = async (req: Request, res: Response) => {
    res.status(200).json({
        status: 'Successfully connected to the server',
        uptime: process.uptime().toString(),
        timestamp: Date.now().toString(),
    });
};
