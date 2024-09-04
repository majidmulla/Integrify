// Middleware for authenticating users based on JWT
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../../config/secrets');

// JWT authentication middleware
const authMiddleware = (req, res, next) => {
  // Get the token from the request header
  const token = req.header('Authorization');

  // If no token is present, deny access
  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    // Verify token and extract user information
    const decoded = jwt.verify(token, jwtSecret);
    req.user = decoded.user; // Attach user info to request object
    next(); // Move to the next middleware or route handler
  } catch (err) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};

module.exports = authMiddleware;
