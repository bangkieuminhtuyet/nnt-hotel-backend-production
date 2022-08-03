const db = require('../models/index');
const authServices = require('../services/authServices');

const handlePostLoginStaff = async (req, res) => {
  try {
    const userLoginInfo = req.body;
    const response = await authServices.postLoginStaff(userLoginInfo);

    if (response.status === 200) {
      res.cookie('refreshToken', response.refreshToken, {
        domain: 'localhost',
        path: '/',
        httpOnly: true,
        secure: false, //  khi code thi de la false, khi deploy thi sua thanh true
        path: '/',
        sameSite: 'strict',
        overwrite: true,
      });
    }

    return res.status(response.status).json({
      errCode: response.code,
      message: response.message,
      data: response.data,
    });
  } catch (e) {
    console.log(e);
    return res.status(400).json({
      errCode: -1,
      message: e.message,
    });
  }
};

const handleGetAllUsers = async (req, res) => {
  try {
    const response = await authServices.getAllUser();
    return res.status(response.status).json({
      errCode: response.code,
      message: response.message,
      data: response.data,
    });
  } catch (e) {
    console.log(e);
    return res.status(400).json({
      errCode: -1,
      message: 'Error from Node Controller',
    });
  }
};

const handleCreateNewStaff = async (req, res) => {
  try {
    const userInfo = req.body.data;
    const response = await authServices.postCreateStaff(userInfo);

    return res.status(response.status).json({
      errCode: response.code,
      message: response.message,
      data: response.data,
    });
  } catch (e) {
    console.log(e);
    return res.status(400).json({
      errCode: -1,
      message: e.message,
    });
  }
};

const handleRefreshJWT = async (req, res) => {
  try {
    const currentRefreshToken = req.cookies.refreshToken;
    const response = await authServices.refreshToken(currentRefreshToken);
    return res.status(response.status).json({
      errCode: response.code,
      message: response.message,
      data: response.data,
    });
  } catch (e) {
    console.log(e);
    return res.status(400).json({
      errCode: -1,
      message: e.message,
      forceLogout: e.forceLogout,
    });
  }
};

const handleLogOut = async (req, res) => {
  try {
    res.clearCookie('refreshToken', {
      httpOnly: true,
      secure: false, //  khi code thi de la false, khi deploy thi sua thanh true
      path: '/',
      sameSite: 'strict',
    });
    // res.cookie('refreshToken', 'xin.chao.anh.chi.em', {
    //   domain: 'localhost',
    //   path: '/',
    //   httpOnly: true,
    //   secure: false, //  khi code thi de la false, khi deploy thi sua thanh true
    //   path: '/',
    //   sameSite: 'strict',
    //   overwrite: true,
    //   expires: new Date(),
    // });
    return res.status(200).json({
      errCode: 0,
      message: 'Đăng xuất thành công !',
    });
  } catch (e) {
    return res.status(400).json({
      errCode: -1,
      message: 'Error from Node Controller',
    });
  }
};

module.exports = {
  handlePostLoginStaff,
  handleCreateNewStaff,
  handleRefreshJWT,
  handleLogOut,
  handleGetAllUsers,
};
