'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Staffs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Staffs.belongsTo(models.Hotels, {
        foreignKey: 'HotelId',
        targetKey: 'id',
        as: 'HotelStaffsData',
      });
    }
  }
  Staffs.init(
    {
      FullName: DataTypes.STRING,
      DisplayName: DataTypes.STRING,
      Role: DataTypes.STRING,
      UserName: DataTypes.STRING,
      HotelId: DataTypes.INTEGER,
      HotelName: DataTypes.STRING,
      Password: DataTypes.TEXT('long'),
      isActive: DataTypes.BOOLEAN,
      isDeleted: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Staffs',
    }
  );
  return Staffs;
};
