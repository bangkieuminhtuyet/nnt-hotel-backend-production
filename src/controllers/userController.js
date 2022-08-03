const userService = require('../services/userService');

const handleLogin = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const userData = await userService.handleUserLogin(email, password);
  return res.status(userData.statusCode).json({
    errCode: userData.errCode,
    message: userData.errMessage,
    user: userData.user ? userData.user : {},
  });
};

const handleGetAllUsers = async (req, res) => {
  const id = req.query.id;
  if (!id) {
    return res.status(500).json({
      errCode: 1,
      errMessage: 'Missing input parameters',
    });
  }
  const users = await userService.getAllUsers(id);
  return res.status(200).json({
    errCode: 0,
    errMessage: 'OK',
    users: users,
  });
};

const handleCreateNewUser = async (req, res) => {
  const userData = req.body;
  const message = await userService.createNewUser(userData);
  return res.status(message.statusCode).json(message);
};

const handleEditUser = async (req, res) => {
  const data = req.body;
  const message = await userService.updateUser(data);
  return res.status(message.statusCode).json(message);
};

const handleDeleteUser = async (req, res) => {
  const userId = req.body.id;
  const message = await userService.deleteUser(userId);
  return res.status(message.statusCode).json(message);
};

module.exports = {
  handleLogin: handleLogin,
  handleGetAllUsers: handleGetAllUsers,
  handleCreateNewUser: handleCreateNewUser,
  handleEditUser: handleEditUser,
  handleDeleteUser: handleDeleteUser,
};
