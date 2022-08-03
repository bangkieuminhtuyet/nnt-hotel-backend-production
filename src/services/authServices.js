const db = require('../models');
const bcrypt = require('bcryptjs');
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

let refreshTokens = [];

const hashPassword = (password) => {
  return new Promise(async (resolve, reject) => {
    try {
      const hash = await bcrypt.hashSync(password, salt);
      resolve(hash);
    } catch (e) {
      console.log(e);
      reject();
    }
  });
};

const generateAccessToken = (payload) => {
  const accessToken = jwt.sign(
    {
      exp: Math.floor(Date.now() / 1000) + 300, // 5 phút = 300
      data: payload,
    }, //Math.floor(Date.now()) -> để ra timestamp hiện tại.
    process.env.JWT_ACCESS_KEY
  );
  return accessToken;
};

const generateRefreshToken = (payload) => {
  const refreshToken = jwt.sign(
    {
      exp: Math.floor(Date.now() / 1000) + 86400, // 1 ngày = 86400
      data: payload,
    },
    process.env.JWT_REFRESH_KEY
  );
  return refreshToken;
};

// login function
const postLoginStaff = (userLoginInfo) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { username, password } = userLoginInfo;

      const response = await db.Staffs.findOne({
        where: { UserName: username, isDeleted: false, isActive: true },
        raw: true,
      });

      if (!response) {
        reject({
          status: 401,
          code: 2,
          message: 'Không có tài khoản này',
        });
      } else {
        //Compare password thì truyền thẳng cái password thô vào đây, không cần phải hash trước.
        const checkPassword = await bcrypt.compareSync(
          userLoginInfo.password,
          response.Password
        );
        if (!checkPassword) {
          reject({
            status: 401,
            code: 3,
            message: 'Sai password',
          });
        } else {
          const { Password, ...user } = response;
          const { id, Role } = user;
          const accessToken = generateAccessToken({
            id,
            role: Role,
            type: 'login token',
          });
          const refreshToken = generateRefreshToken({
            id,
            role: Role,
            type: 'login token',
          });
          refreshTokens.push(refreshToken);
          // console.log(refreshTokens);
          resolve({
            status: 200,
            code: 0,
            message: 'OK',
            data: { user, accessToken },
            refreshToken,
          });
        }
      }
    } catch (e) {
      console.log(e);
      reject({
        status: 400,
        code: 1,
        message: 'Cannot get Data from DB',
      });
    }
  });
};

// create new user
const postCreateStaff = (userInfo) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!userInfo.id) {
        //create new
        const testDuplicate = await db.Staffs.findOne({
          where: { UserName: userInfo.UserName },
        });
        if (testDuplicate) {
          reject({
            status: 400,
            code: 1,
            message: 'Trùng tên, vui lòng nhập tên khác',
          });
        } else {
          let hashedPassword = await hashPassword(userInfo.Password);
          await db.Staffs.create({
            ...userInfo,
            Password: hashedPassword,
            isActive: true,
            isDeleted: false,
          });
          resolve({
            status: 200,
            code: 0,
            message: 'Đã tạo user thành công ! ',
          });
        }
      }
      if (userInfo.id) {
        const currentUser = await db.Staffs.findOne({
          where: { id: userInfo.id, isDeleted: false, isActive: true },
        });
        if (currentUser) {
          if (!userInfo.Password) {
            await currentUser.update({
              ...userInfo,
            });
          }
          if (userInfo.Password) {
            let hashedPassword = await hashPassword(userInfo.Password);
            await currentUser.update({
              ...userInfo,
              Password: hashedPassword,
            });
          }
          resolve({
            status: 200,
            code: 0,
            message: 'Đã chỉnh sửa user thành công ! ',
          });
        }
      }
    } catch (e) {
      console.log(e);
      reject({
        status: 400,
        code: 1,
        message: 'Cannot get Data from DB',
      });
    }
  });
};

const getAllUser = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await db.Staffs.findAll({
        where: { isDeleted: false, isActive: true },
        attributes: {
          exclude: ['Password', 'createdAt', 'updatedAt'],
        },
        // raw: true,
        order: [['Role', 'DESC']],
      });
      if (response) {
        resolve({
          status: 200,
          code: 0,
          message: 'OK',
          data: response,
        });
      } else {
        reject({
          status: 400,
          code: 1,
          message: 'Cannot get Data from DB',
        });
      }
    } catch (e) {
      console.log(e);
      reject({
        status: 400,
        code: 1,
        message: 'Cannot get Data from DB',
      });
    }
  });
};

const refreshToken = (oldRefreshToken) => {
  return new Promise(async (resolve, reject) => {
    try {
      const decodedData = jwt.verify(
        oldRefreshToken,
        process.env.JWT_REFRESH_KEY
      );
      const newAccessToken = generateAccessToken({
        ...decodedData.data,
        type: 'refresh token',
      });
      const newRefreshToken = generateRefreshToken(decodedData.data);
      resolve({
        status: 200,
        code: 0,
        message: 'OK',
        data: { accessToken: newAccessToken },
        refreshToken: newRefreshToken,
      });
    } catch (e) {
      console.log(e);
      reject({
        status: 403,
        code: 1,
        message: 'Bạn đã hết hạn! Vui lòng đăng nhập lại!',
        forceLogout: true,
      });
    }
  });
};

module.exports = {
  postLoginStaff,
  postCreateStaff,
  refreshToken,
  getAllUser,
};
