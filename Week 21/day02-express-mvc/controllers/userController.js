const { request } = require("express");

const getAllUsers = (req, res) => {
  console.log("/api/users endpoint was hit");
  const queryAllUsers = [{ name: "Sally" }]; // pool.query
  return res.status(200).send(queryAllUsers);
};

const getUserByName = (req, res) => {
  console.log("/api/users/:name endpoint was hit");
  const queryUserByName = [{ name: req.params.name }]; // pool.query
  return res.status(200).send(queryUserByName);
};

module.exports = { getAllUsers, getUserByName };
