const jwt = require("jsonwebtoken");
const config = require("config");

function autherize(req, res, next) {
  const token = req.header("x-auth-token");

  // check for the token
  if (!token)
    res.status(401).json({ msg: "token not provided, authorization denied" });

  try {
    // verify token
    const decoded = jwt.verify(token, config.get("jwtSecret"));
    // add user that's already embedded in the token (why?)
    req.user = decoded;
    next();
  } catch (error) {
    res.status(403).json({ msg: "token is not valid" });
  }
}

module.exports = autherize;
