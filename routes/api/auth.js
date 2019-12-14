const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../../models/User");
const config = require("config");
const jwt = require("jsonwebtoken");
const autherize = require("../../middleware/autherize");
const refresherize = require("../../middleware/refresherize");
const tokenList = {};

// ====================POST==================== //

// @route   POST api/auth **
// @desc    Authenticate User **
// @access  Public **

router.post("/", (req, res) => {
  const { email, password } = req.body;

  // validation
  if (!email || !password) {
    res.status(400).json({ msg: "please provide all required information" });
  }

  // check for existing user
  User.findOne({ email }).then(user => {
    // this time we send an error if user DOES NOT already exist
    if (!user) res.status(400).json({ msg: "user does not exists!" });

    // compare password input with the hashed password saved in our database
    bcrypt.compare(password, user.password).then(isMatch => {
      if (!isMatch) res.status(400).json({ msg: "invalid credentials!" });

      const token = jwt.sign({ id: user.id }, config.get("jwtSecret"), {
        expiresIn: 60
      });
      const refreshToken = jwt.sign(
        { id: user.id },
        config.get("jwtRefreshSecret"),
        {
          expiresIn: 604800
        }
      );
      const response = {
        token: token,
        refreshToken: refreshToken,
        user: { id: user.id, name: user.name, email: user.email }
      };
      tokenList[refreshToken] = response;
      res.status(200).json(response);
    });
  });
});

// ================ GET ================ //

// @route   GET api/auth/user **
// @desc    Get Logged In User Data **
// @access  Private **

router.get("/user", autherize, (req, res) => {
  User.findById(req.user.id)
    .select("-password")
    .then(user => res.json(user));
});

router.post("/refresh", refresherize, (req, res) => {
  const refreshToken = req.body.headers["x-refresh-token"];
  const decoded = jwt.verify(refreshToken, config.get("jwtRefreshSecret"));
  req.user = decoded;

  const id = req.user.id;
  if (refreshToken && refreshToken in tokenList) {
    const token = jwt.sign({ id: id }, config.get("jwtSecret"), {
      expiresIn: 60
    });
    tokenList[refreshToken].token = token;
    res.status(200).json({ token: token, refreshToken: refreshToken });
  } else {
    res.status(403).json({ msg: "token refresh failed" });
  }
});

module.exports = router;
