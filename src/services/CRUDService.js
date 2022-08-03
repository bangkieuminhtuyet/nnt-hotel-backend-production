const db = require('../models');
const bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);
const { Sequelize, Model, DataTypes } = require('sequelize');

//1. hash password!!!
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

//2. Create new user
const createNewUser = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let hashPasswordFromBcrypt = await hashUserPassword(data.password);
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
      resolve('ok create a new user suceed!');
    } catch (e) {
      reject(e);
    }
  });
};

//3. Display all User
const getAllUser = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const users = await db.User.findAll();
      resolve(users);
    } catch (e) {
      reject(e);
    }
  });
};

//4. Edit single User
const getUserInfoById = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const userData = await db.User.findOne({ where: { id: userId } });
      resolve(userData);
    } catch (e) {
      reject(e);
    }
  });
};

//5. Update edit info data
const updateUserData = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where: { id: data.id },
      });

      user.set({
        firstName: data.firstName,
        lastName: data.lastName,
        address: data.address,
        password: data.password,
      });
      await user.save();

      let allUser = await db.User.findAll();
      resolve(allUser);
    } catch (e) {
      reject(e);
    }
  });
};

// 6. Delete info Data
const deleteCRUD = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where: { id: userId },
      });

      if (user) {
        user.destroy();
      }
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  createNewUser: createNewUser,
  getAllUser: getAllUser,
  getUserInfoById: getUserInfoById,
  updateUserData: updateUserData,
  deleteCRUD: deleteCRUD,
};
