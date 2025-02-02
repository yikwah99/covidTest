const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, "secret this should be longer");
    next();
  } catch (error) {
    res.status(401).json({
      message: "Authentication failed"
    });
  }
};
