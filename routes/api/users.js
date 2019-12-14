const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../../models/User");
const config = require("config");
const jwt = require("jsonwebtoken");

// ====================POST==================== //

// @route   POST api/users **
// @desc    Create User **
// @access  Public **

router.post("/", (req, res) => {
  const { name, email, password } = req.body;

  // validation
  if (!name || !email || !password) {
    res.status(400).json({ msg: "please provide all required information" });
  }

  // check for existing user
  User.findOne({ email }).then(user => {
    // send an error if user already exists
    if (user) res.status(400).json({ msg: "user already exists!" });
    const newUser = new User({
      name,
      email,
      password
    });

    // create salt and hash
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser.save().then(user => {
          jwt.sign(
            { id: user.id },
            config.get("jwtSecret"),
            { expiresIn: 7200 },
            (err, token) => {
              if (err) throw err;
              res.json({
                token,
                user: {
                  id: user.id,
                  name: user.name,
                  email: user.email
                }
              });
            }
          );
        });
      });
    });
  });
});

module.exports = router;
