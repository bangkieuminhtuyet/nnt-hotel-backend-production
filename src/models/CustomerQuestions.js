'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CustomerQuestions extends Model {
    static associate(models) {
      // define association here
    }
  }
  CustomerQuestions.init(
    {
      Name: DataTypes.STRING,
      Phone: DataTypes.INTEGER,
      Email: DataTypes.STRING,
      Message: DataTypes.TEXT('long'),
      isReadByReception: DataTypes.BOOLEAN,
      isReadByManager: DataTypes.BOOLEAN,
      NoteByReception: DataTypes.TEXT('long'),
      isDeleted: DataTypes.BOOLEAN,
      isActive: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'CustomerQuestions',
    }
  );
  return CustomerQuestions;
};
