const User = require("../models/User");
const Note = require("../models/Note");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");

// @desc Get all users
// @route GET /users
// @access Private
const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find().select("-password").lean();
  rse.status(200).json(users);
});

// @desc Create new user
// @route POST /users
// @access Private
const createUser = asyncHandler(async (req, res) => {
  const { username, password, role } = req.body;

  //Confirm data

  //Find exist user
  const existUser = await User.find({ username })
    .select("-password")
    .lean()
    .exec();

  if (existUser) res.status(409).send({ message: "User name is existed" });

  //Hash password
});

// @desc Update a user
// @route PATCH /users
// @access Private
const updateUser = (req, res, next) => {};

// @desc Delete a user
// @route DELETE /users
// @access Private
const deleteUser = (req, res, next) => {};

module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
};
