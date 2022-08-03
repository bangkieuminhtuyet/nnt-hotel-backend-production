'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HotelIntroductions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  HotelIntroductions.init(
    {
      // HotelId: DataTypes.INTEGER,
      ValueVn: DataTypes.TEXT('long'),
      ValueEn: DataTypes.TEXT('long'),
      ValueCn: DataTypes.TEXT('long'),
      ImgBlob: DataTypes.TEXT('long'),
      isDeleted: DataTypes.BOOLEAN,
      isActive: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'HotelIntroductions',
    }
  );
  return HotelIntroductions;
};
