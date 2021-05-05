const asyncHandler = require("express-async-handler");
const generateToken = require("../utils/generateToken.js");
const User = require("../models/userModel");
const bcrypt = require('bcryptjs');

// @desc Auth user & get token
// @route Post /api/users/login
// @access Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if(!user) return res.status(400).send("Invalid email");
  const comparePassword = await bcrypt.compare(req.body.password, user.password);
  if (!comparePassword){
    return res.status(400).send("Invalid password");
  } else if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email.toLowerCase(),
      token: generateToken(user._id),
    });
  } 
});

// @desc Register a new user
// @route Post /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email } = req.body;
  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(400);
    throw new Error("L'utilisateur existe déjà");
  }
  const salt = await bcrypt.genSalt(10);
  const password = await bcrypt.hash(req.body.password, salt); 
  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("User not found");
  }
});

module.exports = { registerUser, authUser };
