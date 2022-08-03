const bcrypt = require('bcryptjs');
const db = require('../models');
var salt = bcrypt.genSaltSync(10);

const handleUserLogin = (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let userData = {};
      //Logic 1: Check misssing user, password
      if (!email || !password) {
        resolve({
          statusCode: 200,
          errCode: 1,
          errMessage: 'Missing input parameter',
          user: {},
        });
      } else {
        //Logic 2: Check email found on DB:
        const user = await db.User.findOne({
          where: { email: email },
          attributes: ['email', 'roleId', 'password'],
          raw: true,
        });
        if (!user) {
          resolve({
            statusCode: 200,
            errCode: 2,
            errMessage: `User's email not found`,
            user: {},
          });
        } else {
          //Logic 3 : Check password match:
          const checkPassword = await bcrypt.compareSync(
            password,
            user.password
          );
          if (!checkPassword) {
            resolve({
              statusCode: 200,
              errCode: 3,
              errMessage: `Wrong password`,
              user: {},
            });
          } else {
            //Logic 0 : Match user, match password -> return Data
            const { email, roleId, password } = user;
            resolve({
              statusCode: 200,
              errCode: 0,
              errMessage: `Login successfully`,
              user: { email: email, roleId: roleId },
            });
          }
        }
      }
    } catch (e) {
      reject(e);
    }
  });
};

const getAllUsers = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let users = '';
      //1. if id = ALL
      if (userId == 'ALL') {
        users = await db.User.findAll({
          attributes: {
            exclude: 'password',
          },
        });
      }
      // 2. if id = single id
      if (userId && userId !== 'ALL') {
        users = await db.User.findOne({
          where: { id: userId },
        });
      }
      resolve(users);
    } catch (e) {
      reject(e);
    }
  });
};

const hashUserPassword = (password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let hashPassword = await bcrypt.hashSync(password, salt);
      resolve(hashPassword);
    } catch (e) {
      console.log(e);
    }
  });
};

const createNewUser = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      //check email first
      const checkEmail = await db.User.findOne({
        where: { email: data.email },
      });
      if (checkEmail) {
        resolve({
          statusCode: 500,
          errCode: 1,
          message: 'Duplicate email! Please try another email',
        });
      }

      //if email not duplicate -> hash password
      let hashPasswordFromBcrypt = await hashUserPassword(data.password);

      //create new user to DB
      await db.User.create({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        address: data.address,
        phoneNumber: data.phoneNumber,
        gender: data.gender === '1' ? true : false,
        roleId: data.roleId,
        positionId: data.positionId,
        password: hashPasswordFromBcrypt,
        image: data.image,
      });

      resolve({
        statusCode: 200,
        errCode: 0,
        message: 'OK',
      });
    } catch (error) {
      reject(error);
    }
  });
};

const deleteUser = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!userId) {
        resolve({
          statusCode: 500,
          errCode: 1,
          errMessage: 'Mising input parameters',
        });
      }

      const checkUser = await db.User.findOne({ where: { id: userId } });
      if (!checkUser.id) {
        resolve({
          statusCode: 500,
          errCode: 2,
          errMessage: 'Users not found',
        });
      }

      await db.User.destroy({ where: { id: userId } });
      resolve({
        statusCode: 200,
        errCode: 0,
        errMessage: 'Delete successfully',
      });
    } catch (error) {
      reject(error);
    }
  });
};

const updateUser = (userData) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!userData.id) {
        resolve({
          statusCode: 500,
          errCode: 1,
          errMessage: 'Missing input parameters',
        });
      }

      let user = await db.User.findOne({ where: { id: userData.id } });
      if (!user) {
        resolve({
          statusCode: 500,
          errCode: 2,
          errMessage: 'User not found!',
        });
      }

      user.set({
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        address: userData.address,
        phoneNumber: userData.phoneNumber,
        gender: userData.gender === '1' ? true : false,
        roleId: userData.roleId,
        positionId: userData.positionId,
        password: hashUserPassword(userData.password),
        image: userData.image,
      });

      await user.save();

      resolve({
        statusCode: 200,
        errCode: 0,
        errMessage: 'Update successfully',
      });
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  handleUserLogin: handleUserLogin,
  getAllUsers: getAllUsers,
  createNewUser: createNewUser,
  deleteUser: deleteUser,
  updateUser: updateUser,
};
