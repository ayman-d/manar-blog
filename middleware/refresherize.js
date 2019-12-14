const jwt = require("jsonwebtoken");
const config = require("config");

function refresherize(req, res, next) {
  const refreshToken = req.body.headers["x-refresh-token"];
  // const refreshToken = req.cookies.cookieToken;

  // check for the token
  if (!refreshToken)
    res
      .status(401)
      .json({ msg: "refresh token not provided, authorization denied!" });

  try {
    // verify token
    const decoded = jwt.verify(refreshToken, config.get("jwtRefreshSecret"));
    // add user that's already embedded in the token (why?)
    req.user = decoded;
  } catch (error) {
    res.status(403).json({ msg: "refresh token is not valid" });
  }
  next();
}

module.exports = refresherize;
